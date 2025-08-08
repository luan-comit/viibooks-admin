import axios from "axios"
import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  )

  const [appointments, setAppointments] = useState([])
  const [barbers, setBarbers] = useState([])
  const [clients, setClients] = useState([])
  const [payments, setPayments] = useState([])
  const [dashData, setDashData] = useState(false)

  // Getting all Barbers data from Database using API
  const getAllBarbers = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-barbers", {
        headers: { aToken },
      })
      if (data.success) {
        setBarbers(data.barbers)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getAllClients = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-clients", {
        headers: { aToken },
      })
      if (data.success) {
        setClients(data.users)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getAllPayments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-payments", {
        headers: { aToken },
      })
      if (data.success) {
        setPayments(data.payments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  // Function to change barber availablity using API
  const changeAvailability = async (barberId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-availability",
        { barberId },
        { headers: { aToken } }
      )
      if (data.success) {
        toast.success(data.message)
        getAllBarbers()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Getting all appointment data from Database using API
  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/appointments", {
        headers: { aToken },
      })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  // Function to cancel appointment using API
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/cancel-appointment",
        { appointmentId },
        { headers: { aToken } }
      )

      if (data.success) {
        toast.success(data.message)
        getAllAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  // Getting Admin Dashboard data from Database using API
  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/dashboard", {
        headers: { aToken },
      })

      if (data.success) {
        setDashData(data.dashData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const value = {
    aToken,
    setAToken,
    barbers,
    getAllBarbers,
    clients,
    getAllClients,
    payments,
    getAllPayments,
    changeAvailability,
    appointments,
    getAllAppointments,
    getDashData,
    cancelAppointment,
    dashData,
  }

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
