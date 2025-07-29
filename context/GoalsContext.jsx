import { addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseConfig";


export const GoalsContext = createContext()

export function GoalsProvider({children}) {
const [ goals, setGoals] = useState([])
    
    async function fetchGoals() {
        
    }

    async function createGoal(goalsData) {
        // console.log(goalsData)
        await addDoc(collection(db, 'goals'), goalsData)
    }

    async function deleteGoal() {
        
    }

    async function updataGoal() {
        
    }

    return(
        <GoalsContext.Provider
        value={{goals, fetchGoals, createGoal, deleteGoal, updataGoal}}
        >

            {children}
        </GoalsContext.Provider>
    )
}