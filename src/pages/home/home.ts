import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {
  GoogleMapsEvent,
  Marker
} from '@ionic-native/google-maps';

declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
    zoom: 12,
    center: {lat:-25.344, lng:131.036},

    });

    this.directionsDisplay.setMap(this.map );
    let uluru = {lat: -25.344, lng: 131.036};
    var marker = new google.maps.Marker({position: uluru, map: this.map});
    
  }

 
 }
