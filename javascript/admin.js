//Apex chart
var options = {
    series: [
        {
            name: "Request",
            data: [10,23,17,15,11,18,6],
        },
        {
            name: "Report has processed",
            data: [34,65,37,56,21,98,19],
        },
        {
            name: "Report hasn't processed",
            data: [44,65,57,96,81,78,63],
        },
    ],
    chart: {
        type: "bar",
        height: 350, //make this 250
        sparkline: {
            enabled: true, //make this true
        },
    },
    plotOptions: {
        bar: {
            horizpntal:false,
            columnWidth: "55%",
            endingShape:"rounded",
        },
    },
    dataLabels:{
        enabled:false,
    },
    stroke:{
        show:true,
        width:2,
        colors:["transparent"],
    },
    xaxis:{
        categories:["20,Dec","21,Dec","22,Dec","23,Dec","24,Dec","25,Dec","26,Dec"],
    },
    yaxis:{
        title:{
            text:"(forms)",
        },
    },
    fill:{
        opacity:1,
    },
    tooltip:{
        y:{
            formatter:function(val){
                return val+" forms";
            },
        },
    },
    
};

var chart = new ApexCharts(document.querySelector('#apex1'), options);
chart.render();


window.addEventListener("load", event => {

    // Expand Left Side
    var icon = document.querySelector('.left__icon'),
        left = document.querySelector('.left');

    icon.addEventListener('click', expand);

    function expand() {
        if (left.classList.contains('show')) {
            left.classList.remove('show')
        } else {
            left.classList.add('show')
        }
    }

    var menuItem = document.querySelectorAll('.left__menuItem');

    menuItem.forEach(function (el) {
        el.addEventListener("click", openMenu);
    });

    function openMenu(event) {
        var currentmenuItem = event.currentTarget;

        if (currentmenuItem.classList.contains('open')) {
            currentmenuItem.classList.remove('open');
        } else {
            currentmenuItem.classList.add('open');
        }
    };
})