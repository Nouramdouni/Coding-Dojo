import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { AppComponent } from './app.component';

export const routes: Routes = [ 
    {path:'',component: AppComponent },
    {path:'from',component: FormComponent  } ,
    {path:'display',component: DisplayComponent }
];
