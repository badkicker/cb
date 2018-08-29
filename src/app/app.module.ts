import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule    } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TransactionService } from './services/transaction.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ModalDialogModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [
    TransactionService
  ],
  entryComponents:[
    SigninComponent,
    SignupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
