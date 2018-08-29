import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
