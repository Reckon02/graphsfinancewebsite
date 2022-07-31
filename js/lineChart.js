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
      label: "My First graphic",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 40, 30, 45, 20, 60],
      tension: 0.2,
    },
    {
      label: "Another Graphic",
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

const lineChart = new Chart(document.getElementById("myChart"), config);
