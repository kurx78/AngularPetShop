import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InventoryManagementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
