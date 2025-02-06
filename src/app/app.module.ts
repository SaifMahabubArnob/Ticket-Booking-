import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusComponent } from './pages/bus/bus.component';
import { AirComponent } from './pages/air/air.component';
import { ShipComponent } from './pages/ship/ship.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { FlashDealsComponent } from './pages/flash-deals/flash-deals.component';
import { CallComponent } from './pages/call/call.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FrequentRoutesComponent } from './frequent-routes/frequent-routes.component';
import { LimitedTimeDiscountsComponent } from './limited-time-discounts/limited-time-discounts.component';
import { PopularHotelsComponent } from './popular-hotels/popular-hotels.component';
import { AppPromotionComponent } from './app-promotion/app-promotion.component';
import { PaymentLogosComponent } from './payment-logos/payment-logos.component';
import { PopularRoutesComponent } from './popular-routes/popular-routes.component';
import { BusBookingFormComponent } from './bus-booking-form/bus-booking-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    BusComponent,
    AirComponent,
    ShipComponent,
    HotelComponent,
    FlashDealsComponent,
    CallComponent,
    MyBookingComponent,
    LoginComponent,
    SignupComponent,
    FrequentRoutesComponent,
    LimitedTimeDiscountsComponent,
    PopularHotelsComponent,
    AppPromotionComponent,
    PaymentLogosComponent,
    PopularRoutesComponent,
    BusBookingFormComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
