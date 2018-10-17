import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-homework-two',
    templateUrl: './homework-two.component.html',
    styleUrls: ['./homework-two.component.css']
})
export class HomeworkTwoComponent implements OnInit{

    userName = '';
    greeting = '';
    isEnable = false;

    constructor(){}

    ngOnInit(){}

    changeUserName() {
        this.isEnable = true;
        this.greeting = 'Hi! ';
    }
    resetButton(){
        this.userName = '';
        this.greeting = '';
        this.isEnable = false;
    }
}