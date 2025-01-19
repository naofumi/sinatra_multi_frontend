import './App.css'
import {useEffect, useState} from "react"

type Data = {
  message: string
}

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>User Page</h1>
      {data && <p>{data.message}</p>}
    </>
  )
}

export default App
