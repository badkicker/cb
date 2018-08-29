import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  
}
