import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarLeftComponent } from './pages/sidebar-left/sidebar-left.component';
import { HomeComponent } from './pages/home/home.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories.component';
import { LaboratoryComponent } from 'src/app/pages/laboratories/laboratory/laboratory.component';
import { SidebarLeftService } from './services/sidebar-left.service';
import { ComputersComponent } from './pages/computers/computers.component';
import { LoginComponent } from './pages/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [SidebarLeftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
