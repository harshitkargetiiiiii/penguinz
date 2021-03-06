import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-agency-services',
  templateUrl: './agency-services.component.html',
  styleUrls: ['./agency-services.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])]
})
export class AgencyServicesComponent implements OnInit {

  fadeInRight: any;
  
  constructor() { }

  ngOnInit() {
  }

}
