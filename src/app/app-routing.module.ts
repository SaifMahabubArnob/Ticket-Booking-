import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusComponent } from './pages/bus/bus.component';
import { AirComponent } from './pages/air/air.component';
import { ShipComponent } from './pages/ship/ship.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { FlashDealsComponent } from './pages/flash-deals/flash-deals.component';
import { CallComponent } from './pages/call/call.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { FrequentRoutesComponent } from './frequent-routes/frequent-routes.component';
import { LimitedTimeDiscountsComponent } from './limited-time-discounts/limited-time-discounts.component';
import { PopularHotelsComponent } from './popular-hotels/popular-hotels.component';
import { AppPromotionComponent } from './app-promotion/app-promotion.component';
import { PaymentLogosComponent } from './payment-logos/payment-logos.component';
import { PopularRoutesComponent } from './popular-routes/popular-routes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'bus', component: BusComponent },
  { path: 'air', component: AirComponent },
  { path: 'ship', component: ShipComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'flash-deals', component: FlashDealsComponent },
  { path: 'call', component: CallComponent },
  { path: 'my-booking', component: MyBookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'frequent-routes', component: FrequentRoutesComponent },
  { path: 'limited-time-discounts', component: LimitedTimeDiscountsComponent },
  { path: 'popular-hotels', component: PopularHotelsComponent },
  { path: 'app-promotion', component: AppPromotionComponent },
  { path: 'payment-logos', component: PaymentLogosComponent },
  { path: 'popular-routes', component: PopularRoutesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
