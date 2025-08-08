import { createContext } from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_")
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    )
  }

   // Function to format the date and time eg. ( 20_01_2000 10:30 AM => 20 Jan 2000 10:30 AM)
  const slotDateTimeFormat = (slotDate, slotTime) => {
    const dateArray = slotDate.split("_")
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2] + " " + slotTime
    )
  }

  // Function to calculate the age eg. ( 20_01_2000 => 24 )
  const calculateAge = (dob) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    return age || 0
  }

  const value = {
    backendUrl,
    currency,
    slotDateFormat,
    calculateAge,
    slotDateTimeFormat
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider
