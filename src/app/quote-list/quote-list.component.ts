import { Component, OnInit } from '@angular/core';
import { QuotesBlueprint } from '../quotes-blueprint';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  lists: QuotesBlueprint[] = [
    {
      userName: 'George Kirk',
      userQuote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      authorDetails: 'Martin Fowler',
    },
    {
      userName: 'Josh Freeman',
      userQuote: 'First, solve the problem. Then, write the code.',
      authorDetails: 'John Johnson',
    },
    {
      userName: 'Johny Depp',
      userQuote: 'Experience is the name everyone gives to their mistakes.',
      authorDetails: 'Oscar Wilde',
    },
    {
      userName: 'Nataly Portman',
      userQuote:
        'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
      authorDetails: 'Dan Salomon',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
