import React, { useContext, useEffect, useMemo, useState } from "react";
import { TransactionContext } from "./TransactionProvider";
import Table from "./Table";
import './App.css';


export default function App() {
  const { getTransactions } = useContext(TransactionContext)
  const [transactions, setTransactions] = useState({})

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
    getTransactions()
    .then((res) => {
			setTransactions(res)
		})
  }, [])

  return (
    <div className="App">
      <Table columns={columns} data={customers} />
      <Table columns={totalsByColumns} />
    </div>
  );
}
