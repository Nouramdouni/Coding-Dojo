import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-my-component', 
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})


export class MyComponentComponent {  
  @Input() parentMessage: string = '';    

  @Output() notifyParent = new EventEmitter<User[]>();
  sendUsers() {
    this.notifyParent.emit(this.students);
  }

  message= "weclome to my component"
  students = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 23 }
  ];
}
