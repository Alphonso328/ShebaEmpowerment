import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { EventsComponent } from './component/events/events.component';
import { ContactsComponent } from './component/contacts/contacts.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'events', component: EventsComponent},
  {path:'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
