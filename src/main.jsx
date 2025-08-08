import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import AdminContextProvider from "./context/AdminContext.jsx"
import BarberContextProvider from "./context/BarberContext.jsx"
import AppContextProvider from "./context/AppContext.jsx"
import Providers from "./context/LocalizationProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <BarberContextProvider>
        <AppContextProvider>
          <Providers>
            <App />
          </Providers>
        </AppContextProvider>
      </BarberContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
)
