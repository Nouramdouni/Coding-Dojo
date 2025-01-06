import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditeComponent } from './edite/edite.component';

export const routes: Routes = [ 
    {path:"", component: BooksComponent},
    {path:"create", component: BooksComponent}, 
    { path:"edite",component:EditeComponent}
];
