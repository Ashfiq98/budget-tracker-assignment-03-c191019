import { useContext } from "react";
import formatMoney from "../../utils/format-money";
import { EntriesContext } from "../../context/EntriesContext";

const ExpenseList = () => {
  const {entries,setEntries,totalExpense} = useContext(EntriesContext);
  const expenses = entries.filter((expense) => expense.type == "expense");
  const handleDelete = (event) => {
    // Filter out the entry with the given ID
    console.log(event.target.parentNode.previousSibling.innerText);
    let target = event.target.parentNode.previousSibling.innerText;
    const updatedEntries = entries.filter((e) => e.title !== target);

    // // Update the state with the new array without the deleted entry
    setEntries(updatedEntries);
  };
  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>
      { totalExpense==0 ? <p className="py-2.5 text-gray-600">There are no expenses.</p> : 
      <ul id="expense-list" className="divide-y">
        {expenses.map((expense) => {
          return (
            <li key={expense.id} className="py-2.5">
              <div className="group flex justify-between gap-2 text-sm">
                <span>{expense.title}</span>
                <div>
                  <span className="text-red-600">-{formatMoney(expense.value)}</span>
                  <span onClick={handleDelete} className="delete-expense ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                    Delete
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      }
    </div>
  );
};

export default ExpenseList;
