import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTop(){
    
    window.scrollTo(0,0);
    // document.body.sc
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number > 200) {
     document.getElementById('arrow').style.display="block";
    } else if (number < 200) {
      document.getElementById('arrow').style.display="none";
    }
  }
}
