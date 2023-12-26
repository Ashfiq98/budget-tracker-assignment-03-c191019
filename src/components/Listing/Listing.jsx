import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

const Listing = () => {
   
    return (
        <div id="parent-container" className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
            <IncomeList />
            <ExpenseList />
        </div>
    );
};

export default Listing;