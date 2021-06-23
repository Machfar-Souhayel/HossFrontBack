import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title: string = 'WindKraftanlagen in Brandenburg';
  content: string = "Die Datenquelle entspricht dem Fachinformationssystem LIS-A und enthält Informationen über geplante, genehmigte und in Betrieb genommene Windkraftanlagen des Landes Brandenburg sowie technische Informationen zu den einzelnen Windkraftanlagen. Die einzelnen Windkraftanlagen entsprechen dem BlmSchG. der 4. BlmSchV und 9. BlmSchV."
  constructor() { }

  ngOnInit(): void {
  }

}
