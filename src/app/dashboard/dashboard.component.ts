import { Component, OnInit } from '@angular/core';
import { BuildChartService } from '../services/chart.service';
import { DummyDataService } from '../services/static-data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    linechartelementId: string = 'chart_div'
    lineChartData : any = []
    pichartelementId: string = 'piechart';
    pieChartData: any = []
    options = {
        title: 'Face Emotion'
    }
    gScore = 0;
    expression: String;
    confidencelevel = 0;
    happiness = 0
    anger = 0
    sad = 0
    suprise = 0

    constructor(private buildChartService: BuildChartService, private dummyPieData: DummyDataService) { 
        this.pieChartData = this.dummyPieData.getPieChartData()
        this.expression = this.dummyPieData.getExpression();
        this.gScore = this.dummyPieData.getgScore()
        this.confidencelevel = this.dummyPieData.getCoconfidenceLevel()
        this.lineChartData = this.dummyPieData.getLineChartData()
        this.happiness = this.dummyPieData.getHappinessData()
        this.anger = this.dummyPieData.getAngerData()
        this.suprise = this.dummyPieData.getSupriseData()
        this.sad = this.dummyPieData.getSadData()
    }

    ngOnInit() {
        this.buildChartService.buildLineChart(this.linechartelementId, this.lineChartData);
        this.buildChartService.buildChart(this.pieChartData, this.pichartelementId, this.options)
    }


}