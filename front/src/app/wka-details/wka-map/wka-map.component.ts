import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapMarker, GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-wka-map',
  templateUrl: './wka-map.component.html',
  styleUrls: ['./wka-map.component.css']
})
export class WkaMapComponent implements OnInit {
  
  public infoContent: any;
  public info: any;
  @Input() dataSent: any;
  @ViewChild(GoogleMap) map!: any;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 52.515707019763035, lng: 13.402732741834788 },
    zoom: 14
  };
  
marker1 = { position: { lat: 52.51612487171491, lng: 13.375266920097616 } };

markers = [this.marker1];


constructor() { }

ngOnInit(): void {
}

fillMarkersTableWithData(){
  this.markers = [this.marker1];
  for(let item of this.dataSent){
    let marker = {  
    position: { lat: item.Latitude, lng: item.Longitude } 
    }
    this.markers.push(marker)
  }
  this.ngAfterViewInit();
}

ngAfterViewInit(){
  const bounds = this.getBounds(this.markers);
  this.map.googleMap.fitBounds(bounds);
}

getBounds(markers: any){
  let north;
  let south;
  let east;
  let west;

  for (const marker of this.markers){
    // set the coordinates to marker's lat and lng on the first run.
    // if the coordinates exist, get max or min depends on the coordinates.
    north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
    south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
    east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
    west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
  };

  const bounds = { north, south, east, west };
  
  return bounds;
}

  
}
