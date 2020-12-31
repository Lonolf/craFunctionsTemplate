const error = {
  error_reload_button: 'Reload page',
  error_passedDownError_proposed_action: 'Proposed action',
  error_passedDownError_text: 'This was not in our plans!',
  error_passedDownError_title: 'Oops... ^^"',
}

const months = {
  month01: 'January',
  month02: 'February',
  month03: 'March',
  month04: 'April',
  month05: 'May',
  month06: 'June',
  month07: 'July',
  month08: 'August',
  month09: 'September',
  month10: 'October',
  month11: 'November',
  month12: 'December',
}

const dates = {
  Sun: 'Dom',
  Mon: 'Lun',
  Tue: 'Mar',
  Wed: 'Mer',
  Thu: 'Gio',
  Fri: 'Ven',
  Sat: 'Sab',

  Jan: 'Gen',
  Feb: 'Feb',
  Mar: 'Mar',
  Apr: 'Apr',
  May: 'Mag',
  Jun: 'Giu',
  Jul: 'Lug',
  Aug: 'Ago',
  Sep: 'Set',
  Oct: 'Ott',
  Nov: 'Nov',
  Dec: 'Dic',
}

const toPrice = price => {
  return String(price.toFixed(2))
}

const translations = {
  character_noCharacterPhoto_warning: 'Character photo not found',
  character_noCharacterSelected_warning: 'No character selected',
}

export default {
  locale: 'en-EN',
  default: true,
  ...error,
  ...months,
  ...dates,
  toPrice,
  ...translations,
}
