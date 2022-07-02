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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromoiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    ContactComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [
    ApiService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
