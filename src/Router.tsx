import { Routes, Route, useLocation } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { useEffect } from 'react'

export function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}  />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  )
}
