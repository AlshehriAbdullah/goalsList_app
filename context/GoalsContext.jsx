import { createContext, useState } from "react";

export const GoalsContext = createContext()

export function GoalsProvider({childern}) {
const [ goals, setGoals] = useState([])
    
    async function fetchGoals() {
        
    }

    async function createGoal() {
        
    }

    async function deleteGoal() {
        
    }

    async function updataGoal() {
        
    }

    return(
        <GoalContext.Provider
        value={{goals, fetchGoals, createGoal, deleteGoal, updataGoal}}
        >

            {childern}
        </GoalContext.Provider>
    )
}