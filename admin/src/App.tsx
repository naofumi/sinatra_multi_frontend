import {useEffect, useState} from 'react'
import './App.css'

type Data = {
  message: string
}

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch("http://localhost:3000/admin")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      {data && <p>{data.message}</p>}
    </>
  )
}

export default App
