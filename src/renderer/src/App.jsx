import { useEffect } from 'react'
import Tables from './Tables'

function App() {
  useEffect(() => {
    (async (data="test") => await window.api.foo(data))()
  }, [])


  return (
    <>
      <Tables />
    </>
  )
}

export default App

