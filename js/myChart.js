const labels = [
  "day 1",
  "day 2",
  "day 3",
  "day 4",
  "day 5",
  "day 6",
  "day 7",
  "day 8",
  "day 9",
  "day 10"
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "TSLA",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [10, 12, 5, 2, 40, 30, 46, 20, 39],
    },
  ],
};

const data2 = {
  labels: labels,
  datasets: [
    {
      label: "AAPL",
      backgroundColor: "rgb(19, 209, 235)",
      borderColor: "rgb(19, 209, 235)",
      data: [5, 46, 12, 7, 2, 9, 50, 12, 64],
      tension: 0.2,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const config2 = {
  type: "line",
  data: data2,
  options: {},
};
let myChart = new Chart(document.getElementById("myChart"), config);

function renderChart(type) {
  myChart.destroy();
  if (type.value === "tesla") {
    myChart = new Chart(document.getElementById("myChart"), config);
  }
  if (type.value === "apple") {
    myChart = new Chart(document.getElementById("myChart"), config2);
  }
}

function chartType(type) {
  myChart.config.type = type;
  myChart.update();
}
