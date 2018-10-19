import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-homework-three',
    templateUrl: './homework-three.component.html',
    styleUrls: ['./homework-three.component.css']
})
export class HomeworkThreeComponent implements OnInit{

    details = ['1 - password'];
    count = 1;

    constructor() {}

    ngOnInit() {}

    addDetail() {
        this.count++;
        this.details.push(this.count+' - password');
    }

    getColor(detail) {
        return  this.details.indexOf(detail) >= 4 ? 'blue':'white';
    }

    getType(detail) {
        return this.details.indexOf(detail) >= 4 ? true:false;
    }

}