import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import createBooks from './pages/CreateBooks';
import deleteBook from './pages/DeleteBook';
import editBook from './pages/EditBook';
import showBook from './pages/ShowBook';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<createBooks/>} />
      <Route path='/books/details/:id' element={<showBook/>} />
      <Route path='/books/edit/:id' element={<editBook/>} />
      <Route path='/books/delete/:id' element={<deleteBook/>} />
    </Routes>
  )
}
export default App