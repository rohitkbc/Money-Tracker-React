function AddTransaction(props) {
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

    props.set(obj);

    document.getElementById('type').value = ""
    document.getElementById('date').value = ""
    document.getElementById('amount').value = ""

  }

  return (
      <form onSubmit={myFun}>
        <div className="row">
          <div className="col">
            <select className="form-select" id='type'>
              <option disabled selected value="">
                Transaction Type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div className="col">
            <input type="date" className="form-control" id='date'/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col input-group">
            <span className="input-group-text" style={{ backgroundColor: "white" }}>
              $
            </span>
            <input
              type="text"
              className="form-control"
              id='amount'
              placeholder="Enter Amount"
            />
          </div>
          <div className="col-4">
            <button type="Submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
  );
}

export default AddTransaction;
