import navigation from './navigation'
import user from './user'

const test = payload => console.log(payload)

export default { test, ...navigation, ...user }
