import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DummyDataService {
    dummyPieChartData: any = [
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 3],
            ['Disgust', 1],
            ['Fear', 0],
            ['Sad', 1],
            ['Surprise', 3],
            ['Neutral', 7]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 2],
            ['Disgust', 0],
            ['Fear', 0],
            ['Sad', 1],
            ['Surprise', 3],
            ['Neutral', 8]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 1],
            ['Disgust', 0],
            ['Fear', 1.5],
            ['Sad', 1.2],
            ['Surprise', 4],
            ['Neutral', 7]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 2],
            ['Disgust', 2],
            ['Fear', 1],
            ['Sad', 1.8],
            ['Surprise', 4],
            ['Neutral', 6]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 1],
            ['Disgust', 1.5],
            ['Fear', 2],
            ['Sad', 2.5],
            ['Surprise', 4],
            ['Neutral', 6]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 3],
            ['Disgust', 1.4],
            ['Fear', 2],
            ['Sad', 2],
            ['Surprise', 4],
            ['Neutral', 7]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 3],
            ['Disgust', 1],
            ['Fear', 3],
            ['Sad', 4],
            ['Surprise', 5],
            ['Neutral', 7]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 4],
            ['Disgust', 1.5],
            ['Fear', 3],
            ['Sad', 2],
            ['Surprise', 2],
            ['Neutral', 7]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 1],
            ['Disgust', 2],
            ['Fear', 1.5],
            ['Sad', 1],
            ['Surprise', 7],
            ['Neutral', 9]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 2],
            ['Disgust', 1.7],
            ['Fear', 1.8],
            ['Sad', 3],
            ['Surprise', 6],
            ['Neutral', 8]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 4],
            ['Disgust', 0.4],
            ['Fear', 0.5],
            ['Sad', 2],
            ['Surprise', 1],
            ['Neutral', 5]
        ],
        [
            ['Emotion', 'value per Frame'],
            ['Anger', 3],
            ['Disgust', .9],
            ['Fear', 1],
            ['Sad', 4],
            ['Surprise', 0.2],
            ['Neutral', 6]
        ]
    ]

    gScore: any = [
        70, 75, 80, 90, 79, 85, 77, 82, 84, 81, 89, 90, 72, 77, 73
    ]
    confidenceLevel: any = [
        70, 75, 80, 90, 79, 85, 77, 82, 84, 81, 89, 90, 72, 77, 73, 69, 66, 65, 66, 71, 70, 69, 68, 67, 84, 81
    ]
    expression: any = [
        'Neutral', 'Suprise', 'Neutral', 'Anger', 'Disgust', 'Neutral', 'Sad', 'Neutral', 'Suprise', 'Neutral'
    ]

    getPieChartData(){
        return this.dummyPieChartData[Math.floor(Math.random() * this.dummyPieChartData.length)]
    }
    getgScore() {
        return this.gScore[Math.floor(Math.random() * this.gScore.length)]
    }
    getCoconfidenceLevel() {
        return this.confidenceLevel[Math.floor(Math.random() * this.confidenceLevel.length)]
    }
    getExpression() {
        return this.expression[Math.floor(Math.random() * this.expression.length)]
    }
}