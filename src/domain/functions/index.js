import errors from './errors'
import navigation from './navigation'
import user from './user'

const test = payload => console.log(payload)

export default { test, ...errors, ...navigation, ...user }
