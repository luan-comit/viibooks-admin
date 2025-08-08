import React, { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"

const PaymentsList = () => {
  const { payments, aToken, getAllPayments } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllPayments()
    }
  }, [aToken])

  return (
    <div className="w-full max-w-6xl m-5 ">
      <p className="mb-3 text-lg font-medium">All Payments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_1fr_3fr_2fr_2fr_2fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Provider</p>
          <p>Payment TimeStamp</p>
          <p>Amount in CAD</p>
          <p>Client name</p>
          <p>Barber name</p>
        </div>
        {payments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_1fr_3fr_2fr_2fr_2fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <p className="max-sm:hidden">{item.paymentProvider}</p>
            <p className="max-sm:hidden">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(item.paymentDate)}
            </p>
            <p className="max-sm:hidden">
              {"$" + parseInt(item.amount, 10) / 100}
            </p>
            <p className="max-sm:hidden">{item.userName}</p>
            <p className="max-sm:hidden">{item.barberName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentsList
