import { Component, OnInit } from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'google-maps';

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyButRjLBFK8AC-bdjdTFFEJYFIPV4R0R10'
    })

    loader.load().then(() => {
      new google.maps.Map(<HTMLElement>document.getElementById("map"),{
        center: {lat:55.751244,lng:	37.618423},
        zoom: 6
      })
    })
  }

}
