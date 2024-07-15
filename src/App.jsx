import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header.jsx'
import { HashRouter } from 'react-router-dom'
import { TabBox } from './components/TabBox.jsx'

import { CallDataProvider } from './providers/CallProvider/CallProvider.js'
import { CallDetail } from './components/CallDetail.jsx'
import { Calls } from './components/Calls.jsx'

const App = () => {
  return (
    <CallDataProvider>
      <HashRouter>
        <div className="container">
          <div>
            <Header />
            <TabBox />
          </div>
          <Calls />
          <CallDetail />
        </div>
      </HashRouter>
    </CallDataProvider>
  )
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)

export default App
