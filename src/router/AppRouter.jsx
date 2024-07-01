import { Routes, Route, } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Navbar } from '../components/Navbar'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </>
  )
}

// export default AppRouter;
