import Expense from "./Components/Expense";
import Income from "./Components/Income";
import NavBar from "./Components/NavBar";
import TotalBalance from "./Components/TotalBalance";
import TransactionTable from "./Components/TransactionTable";
import IncomeGraph from "./Components/IncomeGraph";
import ExpenseGraph from "./Components/ExpenseGraph";
import TransactionCard from "./Components/AddTransactionCard";

function App() {

  return (
    <div>
      <NavBar />
      <div className="container">
        <div class="row">
          <div class="col-4 mt-4">
            <Income />
          </div>
          <div class="col mt-4">
            <Expense />
          </div>
          <div class="col mt-4">
            <TotalBalance />
          </div>
        </div>

        <div className="row">
          <div class="col-4 mt-4">
            <TransactionTable />
            <TransactionCard />
          </div>
          <div class="col-4 mt-4">
            <IncomeGraph />
          </div>
          <div class="col-4 mt-4">
            <ExpenseGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
