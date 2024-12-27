
import { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import { refreshUser } from '../redux/auth/operations'
import {selectIsRefreshing } from '../redux/auth/selectors'
import { Layout } from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import RestrictedRoute from './RestrictedRoute/RestrictedRoute'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser());
  dispatch(fetchContacts())
}, [dispatch])

  return isRefreshing ? null : (
    <Layout>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/registration' element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage/>}/>}></Route>
      <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>}></Route>
      <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage/>}/>}></Route>
</Routes>
   </Layout>
  )
}

export default App