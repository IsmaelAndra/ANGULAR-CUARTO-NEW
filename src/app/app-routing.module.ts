import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { AboutComponent } from './web/about/about.component';
import { ProductsComponent } from './web/products/products.component';
import { ContactComponent } from './web/contact/contact.component';
import { NotfoundComponent } from './web/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
