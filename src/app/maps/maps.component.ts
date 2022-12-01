import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey:'AIzaSyAQV2U5uKUWVT-lAFfb4VoNg-rdZUi0c38'

    })
    loader.load().then(() =>{
      loader.load().then(() => {
         new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: 35.04028, lng: 9.49361 },
          zoom: 10,
        });
      });
    })
    
  }
  
 
}
