import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var UIkit: any;

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.component.html',
    styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

    data: any = {}
    introduction: boolean = true;
    requirments: boolean = false;
    start_migration: boolean = false;
    title = 'instruction';

    ngOnInit() {

    }

    constructor(private router: Router) {

    }

    sendToPractice() {
        this.router.navigate(['/video'])
    }

    openIntroduction() {
        if (this.introduction == false) {
            this.requirments = false
            this.introduction = true
            this.start_migration = false
        } else return 0
    }

    openRequirements() {
        if (this.requirments == false) {
            this.requirments = true
            this.introduction = false
            this.start_migration = false
        } else return 0
    }

    openStart() {
        if (this.start_migration == false) {
            this.requirments = false
            this.introduction = false
            this.start_migration = true
        } else return 0
    }
}
