import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
import Admin from './Admin/Admin';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters />} ></Route>
        <Route path='/admin/*' element={<Admin />} ></Route>
      </Routes>


      

    </div>
  );
}

export default App;
