import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
  return(
    <>
      <h1>Main App</h1>
      <hr />

      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='login' element={ <LoginPage />}/>
        <Route path='about' element={ <AboutPage />}/>

        {/* responder ante rutas no existentes */}
        {/* <Route path='/*' element={ <HomePage />}/> */}
        <Route path='/*' element={ <Navigate to='/'/> } />
      </Routes>
    </>
  )
}