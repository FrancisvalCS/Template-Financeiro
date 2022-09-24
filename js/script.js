var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'vendas',
        data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
};

var chart = new ApexChart(document.querySelector('#chart'), options);
chart.render();
