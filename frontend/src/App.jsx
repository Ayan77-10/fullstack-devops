import { useEffect , useState } from 'react'
import './App.css'

function App() {
  const [message , setMessage] = useState('')
useEffect(() => {
  fetch('http://localhost:5000/api')
  .then(res => res.json())
  .then(data => setMessage(data.message))
  .catch(err => console.log(err))
}, [])

  return (
    <>
    <h2>Hello World</h2>
      <h1>{message}</h1>
    </>
  )
}

export default App
