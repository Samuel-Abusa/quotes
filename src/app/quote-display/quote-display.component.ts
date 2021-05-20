import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../form-data';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css'],
})
export class QuoteDisplayComponent implements OnInit {
  @Input() showUserQuote: FormData | any;
  constructor() {}

  ngOnInit(): void {}
}
