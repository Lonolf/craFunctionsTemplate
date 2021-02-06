const pages = ['home']

const parseUrl = async({ dispatch, call }) => {
  let [, page] = window.location.pathname.split('/')

  if (!pages.includes(page))
    page = pages[0]

  window.history.pushState({}, '', `/${page}`)
}

const navigate = async({ getState, dispatch, payload }) => {
}

const navigateHome = async({ dispatch }) => {
}

export default {
  parseUrl,
  navigate,
  navigateHome,
}
