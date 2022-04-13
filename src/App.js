import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCustomer from './components/CreateCustomer';
import ViewCustomers from './components/ViewCustomers';
import Navbar from './components/navbar';

function App(){

    return <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<CreateCustomer />}/>
              <Route path="/create" element={<CreateCustomer />}/>
              <Route path="*" element={<CreateCustomer />}/>
              <Route path="/view" element={<ViewCustomers />}/>

            
            </Routes>
          </BrowserRouter>;
  
}

export default App;
