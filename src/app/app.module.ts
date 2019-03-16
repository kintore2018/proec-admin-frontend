import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { TrainerEditComponent } from './organisms/trainer-edit/trainer-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TrainerComponent } from './organisms/trainer/trainer.component';
import { HttpApiInterceptor } from './interceptors/http-api.interceptor';
import { NavComponent } from './molcules/nav/nav.component';
import { PaneComponent } from './molcules/pane/pane.component';
import { TrainerFormComponent } from './molcules/trainer-form/trainer-form.component';
import { TrainerCreateComponent } from './organisms/trainer-create/trainer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    TrainerEditComponent,
    LoginComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
    TrainerComponent,
    NavComponent,
    PaneComponent,
    TrainerFormComponent,
    TrainerCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
