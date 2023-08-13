import { useEffect, useState } from 'react'
import { userEvent } from '@storybook/testing-library'

function App() {
  const [inputText, setInputText] = useState('')


  useEffect(() => {
    setTimeout(() => {
      const input = document.getElementById('input') as any
      userEvent.type(input, 'hello')
    }, 1000)
  }, [])

  return (
    <>
      <div>
        Make some change to the <code>App.tsx</code> and save the file to cause HMR.
      </div>
      <input id="input" onChange={(e) => setInputText(e.target.value)} />
      <div>
        state value: {inputText}
      </div>
    </>
  )
}


export default App
