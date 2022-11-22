function TransactionTable() {
  
  return (
    <div style={{ overflow: "auto", height: "250px" }}>
      <table class="table table-hover text-center">
        <thead className="table-dark sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Income</td>
            <td>12/11/22</td>
            <td>$5000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Income</td>
            <td>20/11/22</td>
            <td>$1000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Expense</td>
            <td>23/11/22</td>
            <td>$2000</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Expense</td>
            <td>30/11/22</td>
            <td>$3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
