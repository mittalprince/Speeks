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
        'Neutral', 'Suprise', 'Neutral', 'Anger', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Suprise', 'Neutral'
    ]

    dummyLineChartData = [
        [
            [0, 0], [1, 8], [2, 10], [3, 11], [4, 8], [5, 9],
            [6, 11], [7, 16], [8, 25], [9, 27], [10, 32], [11, 35],
            [12, 22], [13, 27], [14, 35], [15, 40], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 47], [27, 45], [28, 43], [29, 40],
            [30, 39], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 59], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64]
        ],
        [
            [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
            [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 47], [27, 45], [28, 43], [29, 40],
            [30, 39], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 59], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64]
        ]
    ]

    happinessData = [
        70, 65, 55, 50, 40, 55, 45, 60, 75, 44, 53, 59, 68, 74, 72, 79, 48, 62, 71, 77, 80, 73, 56
    ]

    angryData = [
        10, 11, 13, 25, 24, 23, 20, 11, 16, 18, 9, 12, 17, 23, 20, 18, 16, 15, 12, 14
    ]

    sadData = [
        15, 30, 21, 22, 18, 19, 20, 22, 25, 27, 21, 20, 17, 28, 29, 22, 25
    ]

    supriseData = [
        30, 32, 45, 55, 60, 40 ,45, 59, 55, 52, 46, 48, 38, 38, 35, 40, 49, 41, 52, 53, 
    ]


    getPieChartData() {
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
    getLineChartData() {
        return this.dummyLineChartData[Math.floor(Math.random() * this.dummyLineChartData.length)]
    }

    getHappinessData(){
        return this.happinessData[Math.floor(Math.random() * this.happinessData.length)]
    }

    getSadData() {
        return this.sadData[Math.floor(Math.random() * this.sadData.length)]
    }

    getSupriseData() {
        return this.supriseData[Math.floor(Math.random() * this.supriseData.length)]
    }

    getAngerData() {
        return this.angryData[Math.floor(Math.random() * this.angryData.length)]
    }
}