import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from ".././pages/Dashboard";
import Cars from ".././pages/Cars";
import Admins from ".././pages/Admins";
import Inventory from ".././pages/Inventory";
import Marketing from ".././pages/Marketing";
import Clients from ".././pages/Clients";
import CustomerSupport from ".././pages/CustomerSupport";
import LogOut from ".././pages/LogOut";
import Settings from ".././pages/Settings";

const Routers = ({content}) => {
    return (
        <Routes>
              <Route exact path='/' element={<Dashboard content={content} />}></Route>
              <Route exact path='/:id' element={<Dashboard content={content} />}></Route>
              <Route path='/cars' element={<Cars content={content} />}></Route>
              <Route path='/admins' element={<Admins />}></Route>
              <Route path='/inventory' element={<Inventory />}></Route>
              <Route path='/marketing' element={<Marketing />}> </Route>
              <Route path='/clients' element={<Clients />}></Route>
              <Route path='/customerSupport' element={<CustomerSupport />}></Route>
              <Route path='/logOut' element={<LogOut />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
      </Routes>
    )
}

export default Routers
