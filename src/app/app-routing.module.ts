import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FromEventComponent } from './components/pages/observable/from-event/from-event.component';
import { ListComponent } from './components/pages/observable/list/list.component';
import { ObservableComponent } from './components/pages/observable/observable.component';
import { PromoiseComponent } from './components/pages/promoise/promoise.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: 'promoise', component: PromoiseComponent },
  { path: 'observable', component: ObservableComponent, children:[
    { path: '', component: ListComponent},
    { path: 'from', component: FromEventComponent}
  ]},
  { path: 'contact', component: ContactComponent},
  { path: 'material', component: MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
