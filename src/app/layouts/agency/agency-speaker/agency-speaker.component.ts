import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-speaker',
  templateUrl: './agency-speaker.component.html',
  styleUrls: ['./agency-speaker.component.scss']
})
export class AgencySpeakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  experts = [
    { 
     img:"assets/images/event/l3-2.png",
     name:"Wajeeha Khan",
     designation:"Head Counsellor - otstrab"
    },
    { 
      img:"assets/images/event/l3-3.png",
      name:"Tanuj Chawla",
      designation:"CTO - Jumpster"
     },
     { 
      img:"assets/images/event/l3-4.png",
      name:"Harshit Kargeti",
      designation:"CEO - otstrab"
     },
  ]
  
  speakerCarouselOptions= {
    items: 3,
    margin: 55,
    nav: false,
    dots: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        360: {
            items: 2,
            margin: 10
        },
        480: {
            items: 3,
            margin: 10
        },
        767: {
            items: 2,
            margin: 10
        },
        991: {
            items: 3,
            margin: 10
        }
    }
  }

}
