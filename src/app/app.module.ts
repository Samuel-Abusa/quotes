import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FormComponent } from './form/form.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteDescriptionComponent,
    UpvoteComponent,
    QuoteDetailsComponent,
    FormComponent,
    QuoteDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
