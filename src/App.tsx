import React from 'react'
import AppContainer from './components/AppContainer'
import TodoInput from './components/TodoInput'
import AppRow from './components/AppRow'

function App() {
  return (
    <main>
      <AppContainer>
        <AppRow>
          <TodoInput />
        </AppRow>
      </AppContainer>
    </main>
  )
}

export default App
