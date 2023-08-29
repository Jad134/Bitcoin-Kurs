function renderChart(){
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: month, // ist unser Array Month
      datasets: [{
        label: 'Bitcoin Kurs in €',
        data: course, // unser Array course
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}