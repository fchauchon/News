import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

    list: Array<string>;

  constructor() {

    this.list = ['Un', 'Deux'];
   }

  ngOnInit(): void {
  }

}
