import { state, style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {  
  constructor(private router:Router) {} 
  onSubmit(fromData:any){
    this.router.navigate(["/display"],{state:{data:fromData}});
  }

}