import { useCallback, useEffect, useState } from 'react'
import { userEvent } from '@storybook/testing-library'

function App() {
  const [inputText, setInputText] = useState('')


  const onChange = useCallback((e) => setInputText(e.target.value), [])

  useEffect(() => {
    setTimeout(() => {
      const input = document.getElementById('input') as any
      userEvent.type(input, 'hello')
    }, 1000)
  }, [])

  return (
    <>
      <div>
        Make some change to the <code>App.tsx</code> that adds a node in the DOM, e.g. add some string above this div.
      </div>
      <input id="input" onChange={onChange} />
      <div>
        state value: {inputText}
      </div>
    </>
  )
}


export default App
