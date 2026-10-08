// BAR CHART: Most ordered items (one store)
var ctxItems = document.getElementById('itemsChart').getContext('2d');

var itemsChart = new Chart(ctxItems, {
  type: 'bar',
  data: {
    labels: ['Fried Chicken', 'Burger McDo', 'McNuggets', 'French Fries', 'Coke Float', 'Oreo McFlurry'],
    datasets: [{
      label: 'Times ordered',
      data: [435, 325, 305, 250, 160, 120],
      backgroundColor: 'rgba(13, 110, 253, 0.6)',
      borderColor: 'rgba(13, 110, 253, 1)',
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

// PIE CHART: Payment method (one store)
var ctxPayment = document.getElementById('paymentChart').getContext('2d');

var paymentChart = new Chart(ctxPayment, {
  type: 'doughnut',
  data: {
    labels: ['GCash', 'Maya', 'Cash on pickup', 'Credit/Debit card'],
    datasets: [{
      label: 'Orders',
      data: [450, 180, 320, 90],
      backgroundColor: [
        'rgba(13, 110, 253, 0.6)',
        'rgba(12, 153, 40, 0.6)',
        'rgba(255, 217, 25, 0.6)',
        'rgba(236, 13, 61, 0.6)'
      ],
      borderColor: [
        'rgba(13, 110, 253, 1)',
        'rgba(12, 153, 40, 1)',
        'rgba(255, 217, 25, 1)',
        'rgba(236, 13, 61, 1)'
      ],
      borderWidth: 1
    }]
  }
});

// LINE CHART: Weekly order cancellations (per store)
var ctxCancel = document.getElementById('cancelChart').getContext('2d');

var cancelChart = new Chart(ctxCancel, {
  type: 'line',
  data: {
    labels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8'],
    datasets: [
      {
        label: 'Agno Food Court',
        data: [4, 6, 5, 9, 7, 12, 8, 6],
        borderColor: 'rgba(13, 110, 253, 1)',
        backgroundColor: 'rgba(13, 110, 253, 0.6)',
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: 'Andrew Canteen',
        data: [2, 3, 4, 5, 4, 7, 5, 3],
        borderColor: 'rgba(12, 153, 40, 1)',
        backgroundColor: 'rgba(12, 153, 40, 0.6)',
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: 'Green Mall Cafe',
        data: [1, 2, 2, 3, 6, 8, 4, 2],
        borderColor: 'rgba(236, 13, 61, 1)',
        backgroundColor: 'rgba(236, 13, 61, 0.6)',
        borderWidth: 2,
        tension: 0.3
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
