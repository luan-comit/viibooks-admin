import React, { useContext } from "react"
import { BarberContext } from "./context/BarberContext"
import { AdminContext } from "./context/AdminContext"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Admin/Dashboard"
import AllAppointments from "./pages/Admin/AllAppointments"
import AddBarber from "./pages/Admin/AddBarber"
import BarbersList from "./pages/Admin/BarbersList"
import Login from "./pages/Login"
import BarberAppointments from "./pages/Barber/BarberAppointments"
import BarberDashboard from "./pages/Barber/BarberDashboard"
import BarberProfile from "./pages/Barber/BarberProfile"
import ClientsList from "./pages/Admin/ClientsList"
import PaymentsList from "./pages/Admin/PaymentsList"

const App = () => {
  const { dToken } = useContext(BarberContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-barber" element={<AddBarber />} />
          <Route path="/barber-list" element={<BarbersList />} />
          <Route path="/client-list" element={<ClientsList />} />
          <Route path="/payment-list" element={<PaymentsList />} />
          <Route path="/barber-dashboard" element={<BarberDashboard />} />
          <Route path="/barber-appointments" element={<BarberAppointments />} />
          <Route path="/barber-profile" element={<BarberProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App
