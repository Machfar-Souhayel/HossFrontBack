import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-wka-filter',
  templateUrl: './wka-filter.component.html',
  styleUrls: ['./wka-filter.component.css']
})
export class WkaFilterComponent implements OnInit {
  @Output() sendDataToMap: EventEmitter<any> = new EventEmitter<any>();
  
  wkaArray: Array<any> = [];

  dateVon: string = "";
  dateBis: string = "";

  Inbetriebn: boolean = true;
  Genehmigt: boolean = true;

  constructor(private _filterService: FilterService) { }

  ngOnInit(): void {
    this.updateData();
  }
  

  // Toggle (Inbetriebn and Genehmigt) boolean  values
  isChecked(event: any){
    if(event.target.name === "ch1")
      this.Inbetriebn = event.target.checked;
    if(event.target.name === "ch2")
      this.Genehmigt = event.target.checked;
  }

  // Filter data
  updateData(){
    this._filterService.getInfo(this.dateVon, this.dateBis, this.Inbetriebn, this.Genehmigt)
    .subscribe(data => { 
      this.wkaArray = data; 
      this.sendDataToMap.emit(this.wkaArray);
      console.log(this.wkaArray);
    });
  }
}
