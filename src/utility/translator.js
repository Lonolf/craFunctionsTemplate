import locales from 'locales'

class Translator {
  constructor() {
    this.language = locales[0]
    this.unmatchedLabels = new Set()
    this.printUnmatchedLabels = false // set to true to debug missing label
  }

  setLanguage = (language) => {
    this.language = language
  }

  fromLabel = (label) => {
    if (this.language[label] != null)
      return this.language[label]
    if (this.printUnmatchedLabels) {
      this.unmatchedLabels.add(label)
      console.log('unmatchedLabels', this.unmatchedLabels)
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
