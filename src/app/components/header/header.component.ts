import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isDarkMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd) // Listen for route changes
      )
      .subscribe(() => {
        console.log('change');
        setTimeout(() => {
          this.checkDarkMode(); // Check for the class on route change
        });
        
      });
  }

  checkDarkMode() {
    let element = document.querySelector('.parent-container.dark') || document.querySelector('.parent-container.mobile-dark');
    console.log(element)
    this.isDarkMode = !!element;
  }

}
