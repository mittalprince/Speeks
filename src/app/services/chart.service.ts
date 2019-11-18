import { Injectable } from '@angular/core';
import { GoogleCharts } from 'google-charts';

declare var google;
@Injectable({
    providedIn: 'root'
})

export class BuildChartService {
    constructor() {
        google.charts.load('current', { 'packages': ['corechart', 'line'] });
    }

    buildChart(data, elementId, config) {
        var func = () => {
            var dataTable = google.visualization.arrayToDataTable(data)
            var chart = new google.visualization.PieChart(document.getElementById(elementId))
            chart.draw(dataTable, config)
        }

        google.charts.setOnLoadCallback(func)
    }

    buildLineChart(elementId, arrayData) {
        var func = () => {
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'Confidence');
            data.addRows(arrayData);
            var options = {
                chart: {
                    title: 'Confidence Level',
                    subtitle: 'in second'
                },
                hAxis: {
                    title: 'Time'
                },
                vAxis: {
                    title: 'Confidence'
                },
                backgroundColor: '#f1f8e9'
            };

            var chart = new google.visualization.LineChart(document.getElementById(elementId));
            chart.draw(data, options);
        }
        google.charts.setOnLoadCallback(func)
    }

}