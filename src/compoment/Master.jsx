import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Error from './Error'
import Dashboard from './Dashboard'
import Laptop from './Laptop'
import Electronics from './Electronics'
import Mobiles from './Mobiles'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path ='/' element = {<Login></Login>}></Route>
            <Route path ='/dashboard' element={<Dashboard></Dashboard>}>
              <Route path='dashboard/moblies' element={<Mobiles></Mobiles>}></Route>
              <Route path='dashboard/laptops' element={<Laptop></Laptop>}></Route>
              <Route path ='dashboard/electronics' element={<Electronics></Electronics>}></Route>
              </Route>
            <Route path ='*' element={<Error></Error>}></Route>
        </Routes>
    </div>
  )
}

export default Master