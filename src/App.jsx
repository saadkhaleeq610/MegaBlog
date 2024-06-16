import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {authService} from './appwrite/auth'
import './App.css'

function App() {

  console.log(import.meta.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout({userData}))
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
    
    </>
  )
}

export default App
