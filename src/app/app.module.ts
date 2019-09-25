import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarLeftComponent } from './pages/sidebar-left/sidebar-left.component';
import { HomeComponent } from './pages/home/home.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories.component';
import { RouterModule } from '@angular/router/src/router_module';
import { LaboratoryComponent } from 'src/app/pages/laboratories/laboratory/laboratory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarLeftComponent,
    HomeComponent,
    LaboratoriesComponent,
    LaboratoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
