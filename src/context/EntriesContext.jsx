import { createContext, useEffect } from "react";
import { useState } from "react";

export  const EntriesContext = createContext();

const EntriesContextProvider = ({children}) => {
    const [entries, setEntries] = useState(function () {
        const value = localStorage.getItem("entries");
        if (!value) return [];
        return JSON.parse(value);
      });
    
      useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
      }, [entries]);
   

     let totalIncome = entries.filter((income)=> income.type=='income').reduce((total,current)=>{
         return total+Math.abs(current.value);
        },0);
        let totalExpense = entries.filter((expense)=> expense.type=='expense').reduce((total,current)=>{
            return total+Math.abs(current.value);
        },0);
        let budget = totalIncome-totalExpense;
        
    // setEntries((present)=>{
    //     console.log(present);
    // })
      
    return (
        <EntriesContext.Provider value={{entries,setEntries,totalIncome,totalExpense,budget}}>
         {children}
        </EntriesContext.Provider>
    );
};

export default EntriesContextProvider;
