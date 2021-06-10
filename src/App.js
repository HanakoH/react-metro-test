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
        // Table with individual data
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
    getTransactions()
    .then((res) => {
			setTransactions(res)
		})
  }, [])

  return (
    <div className="App">
      <Table columns={columns} data={transactions} />
    </div>
  );
}
