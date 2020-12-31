import user from './user'

const test = payload => console.log(payload)

const functions = { test, ...user }

export default functions