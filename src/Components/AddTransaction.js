function AddTransaction() {

  const myFun = (e) => {
    e.preventDefault()

    var type = document.getElementById('type').value
    var date = document.getElementById('date').value
    var amount = document.getElementById('amount').value
    
    var obj = {
      type : type,
      date : date,
      amount : amount,
    }

    console.log(obj);

    document.getElementById('type').value = ""
    document.getElementById('date').value = ""
    document.getElementById('amount').value = ""

  }
  return (
    <div>
      <form onSubmit={myFun}>
        <div class="row">
          <div class="col">
            <select class="form-select" id='type'>
              <option disabled selected value="">
                Transaction Type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div class="col">
            <input type="date" class="form-control" id='date'/>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col input-group">
            <span class="input-group-text" style={{ backgroundColor: "white" }}>
              $
            </span>
            <input
              type="text"
              class="form-control"
              id='amount'
              placeholder="Enter Amount"
            />
          </div>
          <div className="col-4">
            <button type="Submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
