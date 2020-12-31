import React from 'react'
import ThemeSelector from 'components/themeSelector/ThemeSelector.jsx'
import withErrorBoundary from 'components/componentError/withErrorBoundary.jsx'
import ContentManager from 'views/contentManager/ContentManager'
import ErrorBar from 'components/errorBar/ErrorBar'
import LoadingBar from 'components/loadingBar/LoadingBar'

const App = () => {
  return (
    <ThemeSelector>
      <ContentManager />
      <ErrorBar />
      <LoadingBar />
    </ThemeSelector>
  )
}

export default withErrorBoundary(App);
