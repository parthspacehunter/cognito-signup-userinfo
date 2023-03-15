import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GeneralInformationComponent } from './userinfo/general-information.component';
import { HttpClientModule } from '@angular/common/http';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    GeneralInformationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TagInputModule
    
  ],
  providers: [
  
    
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
