import React from 'react'
import ThemeSelector from 'components/themeSelector/ThemeSelector.jsx'
import withErrorBoundary from 'components/componentError/withErrorBoundary.jsx'
import ContentManager from 'views/contentManager/ContentManager'
import ErrorBar from 'components/errorBar/ErrorBar'
import LoadingBar from 'components/loadingBar/LoadingBar'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ThemeSelector>
        <ContentManager />
        <ErrorBar />
        <LoadingBar />
      </ThemeSelector>
    </Router>
  )
}

export default withErrorBoundary(App)
