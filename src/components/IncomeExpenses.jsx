import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <aside>
        <div className="flex justify-between my-2">
          <h4 className="flex items-center"><div className="w-4 h-4 mr-1 bg-green-500"></div>Income</h4>
          <p>{income}</p>
        </div>
        <div className="flex justify-between my-2">
          <h4 className="flex items-center"><div className="w-4 h-4 mr-1 bg-orange-600"></div>Expense</h4>
          <p>{expense}</p>
        </div>
      </aside>
    </>
  );
}

export default IncomeExpenses;
