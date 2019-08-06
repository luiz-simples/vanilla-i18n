let defaultLanguage = 'pt'
const translate = {}

export const setDefaultLanguage = (lang) => {
  defaultLanguage = lang
}

const isObject = (value) => value !== null && typeof value === 'object'
const isString = (value) => value !== null && typeof value === 'string'
const hasAttr = (obj, attr) => Object.prototype.hasOwnProperty.call(obj, attr)

const get = (obj, path, defaultValue) => {
  let value, patharr, k
  if (path) {
    if (!isNaN(parseInt(path))) {
      return path
    }
    patharr = path.trim().split('.')
    if (obj) {
      for (let i = 0; i < patharr.length; i++) {
        k = k ? k[patharr[i]] : obj[patharr[i]]
        if (k && !isObject(k)) {
          value = k
          return value
        }
      }
      value = k
    }
  }
  return value || defaultValue
}

Object.assign(String.prototype, {
  translate: function (...args) {
    let lang = null
    let values = null
    let i18n = null
    if (args.length > 0) {
      if (args[0] && isString(args[0])) lang = args[0]
      if (args[0] && isObject(args[0])) values = args[0]
      if (args[1] && isObject(args[1])) values = args[1]
    }

    if (!lang) lang = defaultLanguage
    const languages = translate[lang] || {}

    i18n = hasAttr(languages, this) ? languages[this] : null
    const emptyI18N = i18n === null

    if (emptyI18N) {
      let t = this
      const withVarNum = t.match(/(\[\d+])/g)
      const withVarStr = t.match(/(\[\w+])/g)
      if (withVarNum) t = t.replace(/(\[\d+])/g, '[:num]')
      if (withVarStr) t = t.replace(/(\[\w+])/g, '[:str]')

      i18n = get(languages, this, '')
      const hasI18N = i18n !== null

      if (hasI18N) {
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
      i18n = i18n.replace(/\{\s?([\w.]+)\s?\}/g, function (_, variable) {
        const prop = variable.trim()
        return values[prop] || prop
      })
    }

    return i18n === null ? this : i18n
  }
})

export const setTranslate = (i18n, lang) => {
  if (!lang) lang = defaultLanguage
  if (!translate[lang]) translate[lang] = {}
  Object.assign(translate[lang], i18n)
}
