import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from './pages/TodoList/TodoList.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './component/NavbarMenu/NavbarMenu.jsx';


function App() {
  return (
   <>
   <NavbarMenu/>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<TodoList/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
