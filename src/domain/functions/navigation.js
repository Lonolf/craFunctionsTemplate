const pages = ['home']

const parseUrl = async({ dispatch, call }) => {
  let [, page] = window.location.pathname.split('/')

  if (!pages.includes(page))
    page = pages[0]

  window.history.pushState({}, '', `/${page}`)

  dispatch('editNavigation', { page, position: null })
}

const navigate = async({ getState, dispatch, payload }) => {
}

const navigateHome = async({ dispatch }) => {
}

const handleResize = ({ dispatch }) => {
  dispatch('editNavigation', { dimensions: { mobile: window.innerWidth <= 800, height: window.innerHeight, width: window.innerWidth } })
}

const addSizeListener = ({ dispatch }) => {
  handleResize({ dispatch })
  window.addEventListener('resize', () => handleResize({ dispatch }))
}

const removeSizeListener = () => {
  window.removeEventListener('resize', handleResize)
}

export default {
  parseUrl,
  navigate,
  navigateHome,
  addSizeListener,
  removeSizeListener,
}
