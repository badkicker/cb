import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'search', component: SearchResultsComponent },
    { path: '404', component : NotFoundComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
