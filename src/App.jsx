import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {authService} from './appwrite/auth'
import './App.css'
import { Outlet } from 'react-router-dom';

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

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          Todo: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
