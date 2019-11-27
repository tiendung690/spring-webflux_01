import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';

import { CreateTweetComponent } from './tweet/create-tweet/create-tweet.component';
import { TweetDetailsComponent } from './tweet/tweet-details/tweet-details.component';
import { TweetListComponent } from './tweet/tweet-list/tweet-list.component';
import { SearchTweetComponent } from './tweet/search-tweet/search-tweet.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    CreateTweetComponent,
    TweetDetailsComponent,
    TweetListComponent,
    SearchTweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule {}
