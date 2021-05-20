import { Component, OnInit, Input } from '@angular/core';
import { QuotesBlueprint } from '../quotes-blueprint';
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css'],
})
export class QuoteDescriptionComponent implements OnInit {
  @Input() quoteDetails: QuotesBlueprint | any;
  constructor() {}

  ngOnInit(): void {}
}
