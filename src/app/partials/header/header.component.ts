import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    routeToHome() {
        this.router.navigate(['/home'])
    }

    routeToDemo() {
        this.router.navigate(['/instruction'])
    }
}