import { Component, OnInit, HostListener } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

var $:any;

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  dishes: any = []
  constructor(private service:TransactionService) { }

  ngOnInit() {
    this.dishes = this.service.dishes
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (number > 68) {
        document.getElementById('cheftop').classList.add('chefHeadFixed');
      } else {
        document.getElementById('cheftop').classList.remove('chefHeadFixed');
      }
    };

}
