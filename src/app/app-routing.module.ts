import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'',redirectTo:'/Login',pathMatch:'full'},
 {path:'Login',component:UserLoginComponent},

 {path:'header',component:HeaderComponent},

  //{path:'footer',component:FooterComponent},

  {path:'product',component:ProductComponent},

  {path:'update',component:UpdateComponent},

  {path:'contact',component:ContactComponent},

  {path:'Home',component:HomeComponent},

  {path:'cart',component:CartComponent},
{ path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
