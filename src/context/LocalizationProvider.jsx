"use client"

import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs"

// eslint-disable-next-line react/prop-types
export const Providers = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      {children}
    </LocalizationProvider>
  )
}

export default Providers
