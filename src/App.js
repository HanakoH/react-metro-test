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
        // Table with monthly data per customer
        Header: "Reward Points by Customer",

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
            Header: "Reward Points",
            accessor: "points"
          }
        ]
      }
    ],
    []
  );

  const totalsByColumns = useMemo(
    () => [
      // Table with total reward points by customer
    {
      Header:'Customer',
      accessor: 'name'      
    },    
    {
      Header:'Points',
      accessor: 'points'
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
      <Table columns={totalsByColumns} />
    </div>
  );
}
