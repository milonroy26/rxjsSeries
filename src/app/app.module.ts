import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { PromoiseComponent } from './components/pages/promoise/promoise.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './components/pages/observable/observable.component';
import { ListComponent } from './components/pages/observable/list/list.component';
import { FromEventComponent } from './components/pages/observable/from-event/from-event.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromoiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ApiService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
