import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      // label: "# of Votes",
      data: [5000, 1000, 2000, 3000, 2000],
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
};

function IncomeGraph() {
  return (
    <div class="card text-center" >
      <div class="card-body">
        <h5 class="card-title">Income Chart</h5>
        <p class="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={data} style={{ width: "auto"}}/>
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
