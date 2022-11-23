import { useEffect, useState } from "react";

function TransactionTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setData(items);
    }
  }, [data]);
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
          {data.map((i) => {
            return <tr>
              <th scope="row">{data.indexOf(i) + 1}</th>
              <td>{i.type}</td>
              <td>{i.date}</td>
              <td>{i.amount}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
