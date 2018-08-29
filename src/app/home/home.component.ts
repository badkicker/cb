import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { searchModel } from '../services/transaction.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { } from '@angular/core/src/linker/view_container_ref';
import { SigninComponent } from '../signin/signin.component';

var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchObj: searchModel = {
    location: "Hyderabad", serviceType: "Buffet", vegAttnd: 0, nonVegAttnd: 0, date: new Date(), time: ""
  };
  constructor(private routerObj: Router,
    private modalService: ModalDialogService, private viewRef: ViewContainerRef
  ) {
    // this.searchObj
  }

  ngOnInit() {
    console.log(this.searchObj);
  }

  onSearch(evt) {
    console.log(evt);
    this.routerObj.navigate(['../search'])
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number > 200) {
      document.getElementById('header').classList.add("scrollAct");
    } else if (number < 200) {
      document.getElementById('header').classList.remove("scrollAct");
    }
  }

  onpopup() {

    
    document.getElementById('slideshow').style.display = "block";
    document.getElementById('signPop').style.display = "block";
    document.getElementById('signIn').style.display = "block";
    document.getElementById('forgotPass').style.display = "none";
    document.getElementById('signUp').style.display = "none";
    
  }

  showsignup(){
    document.getElementById('slideshow').style.display = "block";
    document.getElementById('signPop').style.display = "block";
    document.getElementById('signIn').style.display = "none";
    document.getElementById('forgotPass').style.display = "none";
    document.getElementById('signUp').style.display = "block";
  }

  showforgot(){
    document.getElementById('slideshow').style.display = "block";
    document.getElementById('signPop').style.display = "block";
    document.getElementById('signIn').style.display = "none";
    document.getElementById('forgotPass').style.display = "block";
    document.getElementById('signUp').style.display = "none";
  }

  popupClose(){
    document.getElementById('signPop').style.display = "none";
    document.getElementById('slideshow').style.display = "none";
    document.getElementById('signIn').style.display = "none";
    document.getElementById('forgotPass').style.display = "none";
    document.getElementById('signUp').style.display = "none";
  }
}


