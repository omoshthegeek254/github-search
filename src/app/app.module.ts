import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import{HttpClientModule} from '@angular/common/http';
import { ProfPicDirective } from './prof-pic.directive';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DateFormatPipe } from './date-format.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfPicDirective,
    LandingPageComponent,
    DateFormatPipe,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
