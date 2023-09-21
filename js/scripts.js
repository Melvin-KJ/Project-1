// SIDEBAR TOGGLE

    var sidebarOpen = false;
    var sidebar = document.getElementById("sidebar");

    function openSidebar() {
        if(!sidebarOpen) {
            sidebar.classList.add("sidebar=responsive")
            sidebarOpen = true;
        }
    }

    function closeSidebar() {
        if(!sidebarOpen) {
            sidebar.classList.remove("sidebar=responsive")
            sidebarOpen = false; 
        }
    }

    // ---------- CHARTS ----------

    // BAR CHART
    
    var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
        show: false
        },
    },
    colors: [
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b74f",
        "#4f35a1"
    ],
    plotOptions: {
        bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ["Television", "Laptop", "Monitor", "Washing Machine", "Refrigerator"],
    },
    yaxis: {
        title: {
        text: "Count"
        }
    }
    };

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();


    // AREA CHART
    var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        data: [21, 38, 28, 51, 46, 97, 100]
    }, {
        name: 'Sales Orders',
        data: [8, 29, 43, 30, 36, 51, 41]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
        show: false,
        },
    },
    colors: ["#F8D210", "#5CD85A"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [
        {
        title: {
            text: 'Purchase Orders',
        },
        },
        {
        opposite: true,
        title: {
            text: 'Sales Orders',
        },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
    };

    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    areaChart.render();