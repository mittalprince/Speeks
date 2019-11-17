import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-a',
    templateUrl: './header-a.component.html',
    styleUrls: ['./header-a.component.css']
})

export class HeaderAComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {

    }

    routeToHome() {
        this.router.navigate(['/home'])
    }

    routeToDemo() {
        this.router.navigate(['/instruction'])
    }
}