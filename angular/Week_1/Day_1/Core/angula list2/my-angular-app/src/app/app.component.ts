import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import{MyComponentComponent} from "./my-component/my-component.component"
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponentComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 

export class AppComponent {
  title = 'my-angular-app'; 
  allUsers: User[]=[]
  onNotify(students: User[]){
    this.allUsers=students}
}
