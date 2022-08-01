import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.css'],
})
export class MapTestComponent implements OnInit {
  constructor() {}

  lat: number = 42.963795;
  lng: number = -85.670006;

  ngOnInit(): void {}
}
