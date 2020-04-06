var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(241, 156, 29, .5)',
            borderColor: 'rgb(241, 156, 29)',
            data: [{
                x: 0,
                y: 18
            }, {
                x: 5,
                y: 20
            }, {
                x: 11,
                y: 32
            }, {
                x: 15,
                y: 10
            }, {
                x: 20,
                y: 48
            }, {
                x: 25,
                y: 10
            }, {
                x: 30,
                y: 19
            }]
        }]
    },

    // Configuration options go here
    options: {}
});