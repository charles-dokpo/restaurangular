import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, 
  MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule, 
  MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule, MatSelectModule,
   MatToolbarModule,MatInputModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { DishTableComponent } from './dish-table/dish-table.component';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PhoneComponent } from './phone/phone.component';


// POUR LE ROUTING
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'carte', component: CarteComponent },
  {path: 'reserve', component: ReserveComponent},
  {path: 'schedule', component: ScheduleComponent },
  {path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashboardComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
