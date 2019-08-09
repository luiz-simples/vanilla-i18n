let defaultLanguage = 'pt'
const translate = {}

export const setDefaultLanguage = (lang) => {
  defaultLanguage = lang
}

const isObject = (value) => value !== null && typeof value === 'object'
const isString = (value) => value !== null && typeof value === 'string'
const hasAttr = (obj, attr) => Object.prototype.hasOwnProperty.call(obj, attr)
const isNum = (val) => !isNaN(parseInt(val))

const get = (obj, path, defaultValue) => {
  let value

  if (path) {
    if (isNum(path)) return path

    if (obj) {
      let k
      const pathArr = path.trim().split('.')

      for (let i = 0, c = pathArr.length; i < c; i++) {
        k = k ? k[pathArr[i]] : obj[pathArr[i]]
        if (k && !isObject(k)) return k
      }

      value = k
    }
  }

  return value || defaultValue
}

Object.assign(String.prototype, {
  translate: function (...args) {
    let i18n, lang, values

    if (args.length > 0) {
      if (args[0] && isString(args[0])) lang = args[0]
      if (args[0] && isObject(args[0])) values = args[0]
      if (args[1] && isObject(args[1])) values = args[1]
    }

    if (!lang) lang = defaultLanguage
    const languages = translate[lang] || {}

    if (hasAttr(languages, this)) i18n = languages[this]
    const emptyI18N = !i18n

    if (emptyI18N) {
      let t = this
      const withVarNum = t.match(/(\[\d+])/g)
      const withVarStr = t.match(/(\[\w+])/g)
      if (withVarNum) t = t.replace(/(\[\d+])/g, '[:num]')
      if (withVarStr) t = t.replace(/(\[\w+])/g, '[:str]')

      i18n = get(languages, this, '')

      if (i18n) {
        if (withVarNum) {
          withVarNum.forEach((val, index) => {
            i18n = i18n.replace(`{$${index + 1}+2}`, parseInt(val.match(/\d+/g), 10) + 2)
            i18n = i18n.replace(`{$${index + 1}+1}`, parseInt(val.match(/\d+/g), 10) + 1)
            i18n = i18n.replace(`$${index + 1}`, val.match(/\d+/g))
          })
        }

        if (withVarStr) {
          withVarStr.forEach((val, index) => {
            const rg = new RegExp(`$${index}`, 'g')
            i18n = i18n.replace(rg, val.match(/\w+/g))
          })
        }
      }
    }

    if (values) {
      i18n = i18n.replace(/\{\s?([\w.]+)\s?\}/g, (_, variable) => {
        const prop = variable.trim()
        return values[prop] || prop
      })
    }

    return i18n || this
  }
})

export const setTranslate = (i18n, lang) => {
  if (!lang) lang = defaultLanguage
  if (!translate[lang]) translate[lang] = {}
  Object.assign(translate[lang], i18n)
}
