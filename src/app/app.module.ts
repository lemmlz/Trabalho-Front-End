import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarLeftService } from './services/sidebar-left.service';
import { ScreenService } from './services/screen.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarLeftComponent } from './pages/sidebar-left/sidebar-left.component';
import { HomeComponent } from './pages/home/home.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories.component';
import { LaboratoryComponent } from 'src/app/pages/laboratories/laboratory/laboratory.component';
import { ComputersComponent } from './pages/computers/computers.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarLeftComponent,
    HomeComponent,
    LaboratoriesComponent,
    LaboratoryComponent,
    ComputersComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [SidebarLeftService, ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
