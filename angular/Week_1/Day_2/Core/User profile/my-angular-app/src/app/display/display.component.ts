import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent { 
  displayDate:any; 
  constructor (private router:Router){ 
    const navigation=this.router.getCurrentNavigation();
    this.displayDate=navigation?.extras?.state?.['data']||{};
  }

}
