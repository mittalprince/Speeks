import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var UIkit: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    title = 'landing';

    ngOnInit() {

    }

    constructor(private router: Router) {

    }

    sendToDemo() {
        this.router.navigate(['/instruction'])
    }
}
