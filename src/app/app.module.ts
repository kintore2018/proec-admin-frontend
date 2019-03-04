import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { TrainerEditComponent } from './organisms/trainer-edit/trainer-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './organisms/menu/menu.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { InputComponent } from './atoms/input/input.component';
import { FilterComponent } from './molcules/filter/filter.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TrainerComponent } from './organisms/trainer/trainer.component';
import { HttpApiInterceptor } from './interceptors/http-api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    TrainerEditComponent,
    LoginComponent,
    MenuComponent,
    LogoComponent,
    InputComponent,
    FilterComponent,
    ButtonComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
