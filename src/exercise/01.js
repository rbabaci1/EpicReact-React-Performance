// Code splitting lesson 01

import * as React from 'react'

const Globe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '1.5rem',
      }}
    >
      <label
        style={{
          marginBottom: '1rem',
          border: '1px solid red',
          cursor: 'pointer',
          padding: '0.5rem 1rem',
        }}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>

      <div style={{width: 400, height: 400}}>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
