import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RosterComponent } from './components/roster/roster.component';
import { RosterService } from './services/roster.service';
import { ApiService } from './services/api.service';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: RosterComponent },
  { path: 'create-update', component: CreateUpdateComponent },
  { path: 'studentlist', component: ListComponent},
  { path: '**', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    CreateUpdateComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [RosterService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }