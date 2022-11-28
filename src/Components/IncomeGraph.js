import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeGraph(props) {
  const [mydataset, setmyDataset] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(11, 218, 81, 0.5)",
          "rgba(34, 139, 34, 0.5)",
          "rgba(152, 251, 152, 0.5)",
          "rgba(76, 187, 23, 0.5)",
          "rgba(50, 205, 50, 0.5)",
        ],
        borderColor: [
          "rgba(11, 218, 81, 1)",
          "rgba(34, 139, 34, 1)",
          "rgba(152, 251, 152, 1)",
          "rgba(76, 187, 23, 1)",
          "rgba(50, 205, 50, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    var amountArr = [];
    props.data.forEach(item => {
      if (item.type === "Income") {
        amountArr.push(item.amount);
      }
    });

    setmyDataset({
      datasets: [
        {
          data: amountArr,
          backgroundColor: [
            "rgba(11, 218, 81, 0.5)",
            "rgba(34, 139, 34, 0.5)",
            "rgba(152, 251, 152, 0.5)",
            "rgba(76, 187, 23, 0.5)",
            "rgba(50, 205, 50, 0.5)",
          ],
          borderColor: [
            "rgba(11, 218, 81, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(152, 251, 152, 1)",
            "rgba(76, 187, 23, 1)",
            "rgba(50, 205, 50, 1)",
          ],
          borderWidth: 1,
        },
      ],
    })
  }, [props.data]);

  return (
    <div className="card text-center" >
      <div className="card-body">
        <h5 className="card-title">Income Chart</h5>
        <p className="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={mydataset} style={{ width: "auto"}}/>
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
