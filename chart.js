const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent', ],
        datasets: [{
            label: 'Aptitude class ',
            data: [80, 20],
            borderWidth: 2
        }]
    },
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent', ],
        datasets: [{
            label: 'Communication class ',
            data: [85, 15],
            borderWidth: 2
        }]
    },
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent', ],
        datasets: [{
            label: 'Domain class',
            data: [75, 25],
            borderWidth: 2
        }]
    },
});

const ctx4 = document.getElementById('myChart4');


new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Monthly attendance',
            data: [50, 80, 75, 60, 78, 83],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
    }
});