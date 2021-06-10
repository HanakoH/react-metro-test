import React, { useContext, useEffect, useMemo, useState } from "react";
import { CustomerContext } from "./CustomerProvider";
import Table from "./Table";
import './App.css';


export default function App() {
  const { getCustomers } = useContext(CustomerContext)
  const [customers, setCustomers] = useState({})

  const columns = useMemo(
    () => [
      {
        // Table with data
        Header: "Reward Points by Customer",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Amount",
            accessor: "amount"
          },
          {
            Header: "Points",
            accessor: "points"
          }
        ]
      }
    ],
    []
  );

  useEffect(() => {
    getCustomers()
    .then((res) => {
			setCustomers(res)
		})
  }, [])

  return (
    <div className="App">
      <Table columns={columns} data={customers} />
    </div>
  );
}
