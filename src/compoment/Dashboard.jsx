import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard

      <Link to="dashboard/moblies" >Mobiles</Link>
      <Link to="dashboard/laptops" >laptop</Link>
      <Link to="dashboard/electronics">electronics</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard