import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeGraph(props) {
  const [mydataset, setmyDataset] = useState([]);

  useEffect(() => {
    props.data.forEach(item => {
      if (item.type === "Expense") {
        console.log("Expense: "+ item.amount);
      }
    });
  }, [props.data]);

  var incomeData = [5000, 1000, 2000, 3000, 2000];
  const data = {
    datasets: [
      {
        data: incomeData,
        backgroundColor: [
          "rgba(233, 116, 81, 0.5)",
          "rgba(210, 43, 43, 0.5)",
          "rgba(248, 131, 121, 0.5)",
          "rgba(250, 160, 160, 0.5)",
          "rgba(227, 115, 94, 0.5)",
        ],
        borderColor: [
          "rgba(233, 116, 81, 1)",
          "rgba(210, 43, 43, 1)",
          "rgba(248, 131, 121, 1)",
          "rgba(250, 160, 160, 1)",
          "rgba(227, 115, 94, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Expense Chart</h5>
        <p className="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={data} style={{ width: "auto" }} />
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
