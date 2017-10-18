import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule } from '@angular/material';

import { AppComponent } from './components/app/app.component';
import { ExampleDialogComponent } from './dialogs/example-dialog/example-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/users/list/user-list.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';

import { HttpService } from './services';
import { UserDetailsComponent } from './components/users/details/user-details.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
  {
      path: '',
      component: MainLayoutComponent,
      // canActivate: [AuthGuard],
      children: [
          { path: '', pathMatch: 'full', redirectTo: '/home' },
          { path: 'home', component: HomeComponent },
          { path: 'users', component: UserListComponent },
          { path: 'users/new', component: UserDetailsComponent },
          { path: 'users/details/:id', component: UserDetailsComponent },
          { path: 'settings', component: SettingsComponent }
      ]
  },
  {
      path: '',
      component: LoginLayoutComponent,
      children: [
          {
              path: 'login',
              component: LoginComponent
          }
      ]
  },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent,
    HomeComponent,
    MainLayoutComponent,
    NavBarComponent,
    LoginLayoutComponent,
    LoginComponent,
    UserListComponent,
    UserListComponent,
    ToolbarComponent,
    UserDetailsComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ExampleDialogComponent]
})
export class AppModule { }
