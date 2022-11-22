import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeGraph() {

  var incomeData = [5000, 1000, 2000, 3000, 2000];
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // label: "# of Votes",
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
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Expense Chart</h5>
        <p class="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={data} style={{ width: "auto" }} />
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
