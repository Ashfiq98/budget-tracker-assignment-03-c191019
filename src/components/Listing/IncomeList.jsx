import  { useContext, useState } from "react";
import formatMoney from "../../utils/format-money";
import { EntriesContext } from "../../context/EntriesContext";

const IncomeList = () => {
  const {entries,setEntries,totalIncome} = useContext(EntriesContext);

  const [editItemId, setEditItemId] = useState(null);


  const incomes = entries.filter((income) => income.type == "income");
  
  const handleDelete = (event) => {
    let target = event.target.parentNode.previousSibling.innerText;
    const updatedEntries = entries.filter((e) => e.title !== target);
    setEntries(updatedEntries);
  };

  const handleEdit = (income) => {
    setEditItemId(income.id);
  };

  const handleSave = (editedTitle, editedValue) => {
    const updatedEntries = entries.map((income) =>
      income.id === editItemId
        ? { ...income, title: editedTitle, value: editedValue }
        : income
    );

    setEntries(updatedEntries);
    setEditItemId(null); // Exit editing mode
  };
  // console.log(incomes);
  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>
      {totalIncome==0 ? <p className="py-2.5 text-gray-600">There are no expenses.</p>:
      <ul id="income-list" className="divide-y">
        {incomes.map((income) => {
          return (
            <li key={income.id} className="py-2.5">
             {editItemId === income.id ? (
                  <>
                    <input
                      type="text"
                      value={income.title}
                      onChange={(e) => handleSave(e.target.value, income.value)}
                    />
                    <input
                      type="text"
                      value={income.value}
                      onChange={(e) => handleSave( e.target.value,income.title)}
                    />
                    <span
                      onClick={() => handleSave(income.title, income.value)}
                      className="save-income ml-2 cursor-pointer font-medium text-green-500"
                    >
                      Save
                    </span>
                  </>
                ) : (
                  <div className="group flex justify-between gap-2 text-sm">
                    <span>{income.title}</span>
                    <div>
                      <span className="text-green-600">+{formatMoney(income.value)}</span>
                      <span
                        onClick={() => handleEdit(income)}
                        className="edit-income ml-2 hidden cursor-pointer font-medium text-blue-500 group-hover:inline-block"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => handleDelete(income.title)}
                        className="delete-income ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                )}
            </li>
          );
        })}
      </ul>
      }
    </div>
  );
};

export default IncomeList;
{/* <div className="group flex justify-between gap-2 text-sm">
                <span >{income.title}</span>
                <div>
                  <span className="text-green-600">+{formatMoney(income.value)}</span>
                  <span  onClick={handleEdit} className="edit-income ml-2 hidden cursor-pointer font-medium text-blue-500 group-hover:inline-block">
                    Edit
                  </span>
                  <span  onClick={handleDelete} className="delete-income ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                    Delete
                  </span>
                </div>
              </div> */}