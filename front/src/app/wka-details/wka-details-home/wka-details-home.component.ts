import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wka-details-home',
  templateUrl: './wka-details-home.component.html',
  styleUrls: ['./wka-details-home.component.css']
})
export class WkaDetailsHomeComponent implements OnInit {
  filteredData: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  getWkaArray(val: any){
    this.filteredData = val;
  }
}
