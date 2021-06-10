import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "./TransactionProvider";

export const Calculation = (data) => {

    const { getTransactions } = useContext(TransactionContext)
    const [transactions, setTransactions] = useState({})

    const rewardsPointsCalc = (amount) => {
        if (amount >=50 && amount < 100) {
            rewardsPoints = amount-50
            return rewardsPoints;
        } else if (amount > 100){
            rewardsPoints = (2*(amount-100) + 50)
            return rewardsPoints;
        }
        return ;
    }

}