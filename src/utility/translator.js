import languages from 'locales'

class Translator {
  constructor() {
    this.language = this.getLanguage({ languages, locale: navigator.locale })
    this.unmatchedLabels = new Set()
    this.printUnmatchedLabels = false // set to true to debug missing label
  }

  getLanguage = ({ languages = [], locale = 'en-EN' }) => {
    for (let language of languages)
      if (language.locale === navigator.language)
        return language

    for (let language of languages)
      if (language.default)
        return language

    for (let language of languages)
      return language

    return {}
  }

  setLanguage = locale => {
    for (let language of languages)
      if (language.locale === locale)
        this.language = language
  }

  fromLabel = (label) => {
    if (this.language[label])
      return this.language[label]
    if (this.printUnmatchedLabels) {
      this.unmatchedLabels.add(label)
      console.debug('unmatchedLabels', this.unmatchedLabels)
    }
    return label
  }

  toPrice = price => {
    price = Number.isNaN(price) ? 0 : Number(price)

    if (this.language.toPrice != null)
      return this.language.toPrice(price)
    else
      return price
  }

  stringLiteral = ({ label, ...values }) => (
    this.language[label] ? this.language[label](values) : (label + JSON.stringify(values))
  )
}

export default new Translator()
