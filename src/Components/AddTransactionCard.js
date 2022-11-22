import AddTransaction from "./AddTransaction";

function TransactionCard() {
  return (
    <div class="card text-center mt-4" style={{ width: "25rem" }}>
      <div class="card-body">
        <h5 class="card-title">Add Transaction</h5>
        <p class="card-text text-success" style={{ fontWeight: "bold" }}>
            <AddTransaction />
        </p>
      </div>
    </div>
  );
}

export default TransactionCard;
