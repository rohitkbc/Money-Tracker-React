import { useState } from "react";

function Income() {
  const [col, setCol] = useState("");
  return (
    <div onMouseEnter={() => setCol("#F1F1F1")} onMouseLeave={() => setCol("")}>
      <div class="card text-center" style={{ width: "auto", backgroundColor: `${col}` }}>
        <div class="card-body">
          <p class="card-text" style={{ fontWeight: "bold" }}>
            Income
          </p>
          <h5 class="card-title text-success">$ 50,000</h5>
        </div>
      </div>
    </div>
  );
}

export default Income;



