import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DragonPageComponent } from './components/pages/dragon-page/dragon-page.component';
import { DragonFormComponent } from './components/pages/dragon-form/dragon-form.component';
import { DragonProfileComponent } from './components/pages/dragon-profile/dragon-profile.component';
import { FormsModule } from '@angular/forms';
import { DragonUpdateComponent } from './components/pages/dragon-update/dragon-update.component';
import { DragonDeleteComponent } from './components/pages/dragon-delete/dragon-delete.component';
import { AuthService } from './components/pages/login/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonPageComponent,
    DragonFormComponent,
    DragonProfileComponent,
    DragonUpdateComponent,
    DragonDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
