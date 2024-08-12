import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageLoaderAnimation', [
      state('visible', style({
        transform: 'translateY(0%)', // Start with the div fully visible
      })),
      state('hidden', style({
        transform: 'translateY(100%)', // Move the div off the top of the page
      })),
      transition('visible => hidden', [
        animate('.5s ease-out') // 1 second duration with ease-out effect
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  showLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false; // Trigger the animation after the timeout
    }, 500); // 1 second delay before starting the animation
  }

}
