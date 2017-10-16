let defaultLanguage = 'pt'
let translate = {}

export const setDefaultLanguage = (lang) => {
  defaultLanguage = lang
}

Object.assign(String.prototype, {
  translate: function (lang) {
    let i18n = null
    if (!lang) lang = defaultLanguage
    const languages = translate[lang] || {}

    i18n = languages.hasOwnProperty(this) ? languages[this] : null
    const emptyI18N = i18n === null

    if (emptyI18N) {
      let t = this
      const withVarNum = t.match(/(\[\d+])/g)
      const withVarStr = t.match(/(\[\w+])/g)
      if (withVarNum) t = t.replace(/(\[\d+])/g, '[:num]')
      if (withVarStr) t = t.replace(/(\[\w+])/g, '[:str]')

      i18n = languages.hasOwnProperty(t) ? languages[t] : null
      const hasI18N = i18n !== null

      if (hasI18N) {
        withVarNum.forEach((val, index) => {
          i18n = i18n.replace(`{$${index + 1}+2}`, parseInt(val.match(/\d+/g), 10) + 2)
          i18n = i18n.replace(`{$${index + 1}+1}`, parseInt(val.match(/\d+/g), 10) + 1)
          i18n = i18n.replace(`$${index + 1}`, val.match(/\d+/g))
        })

        withVarStr.forEach((val, index) => {
          const rg = new RegExp(`$${index}`, 'g')
          i18n = i18n.replace(rg, val.match(/\w+/g))
        })
      }
    }

    return i18n === null ? this : i18n
  }
})

const setTranslate = (i18n, lang) => {
  if (!lang) lang = defaultLanguage
  if (!translate[lang]) translate[lang] = {}
  Object.assign(translate[lang], i18n)
}

export default setTranslate
