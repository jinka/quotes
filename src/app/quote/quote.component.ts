import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'My Quote 1','Daudi','Ali'),
    new Quote(2,'My Quote 2','Jinka','Farah'),
    new Quote(3,'My Quote 3','Shuuti','Areeja')
  ]

  
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
      if(toDelete) {
        this.quotes.splice(index,1);
      }  
        }
        }
  constructor() { }

  ngOnInit() {
  }

}
