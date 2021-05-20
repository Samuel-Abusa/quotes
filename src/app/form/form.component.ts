import { Component, OnInit } from '@angular/core';
import { FormData } from '../form-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  quotes: FormData | undefined;

  onClickSubmit(data: any) {
    this.quotes = { name: data.name, quote: data.quote, author: data.author };
  }
  constructor() {}

  ngOnInit(): void {}
}
