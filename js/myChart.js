const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "jajj",
  "test",
  "test",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "TSLA",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 40, 30, 45, 20, 60],
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
  type: "bar",
  data: data,
  options: {},
};

const config2 = {
  type: "bar",
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
