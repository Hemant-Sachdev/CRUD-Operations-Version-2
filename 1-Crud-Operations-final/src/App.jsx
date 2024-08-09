import {BrowserRouter, Routes, Route} from 'react-router-dom';
import View from './components/View';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Read from './components/Read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<View />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<EditUser />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
