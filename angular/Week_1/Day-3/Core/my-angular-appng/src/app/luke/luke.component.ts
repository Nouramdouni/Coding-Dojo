import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-luke',
  imports: [],
  templateUrl: './luke.component.html',
  styleUrl: './luke.component.css'
})
export class LukeComponent { 
  items:any[]=[]; 
  constructor(private apiService:ApiService){} 
  ngOnInit():void{
    this.apiService.getItems().subscribe({
      next:(data)=>this.items=data,
      error:(err)=>console.error(err),
      complete:()=>console.info('complete')
    })
  }

}
