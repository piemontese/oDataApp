import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material'; 
import { MatToolbarModule } from '@angular/material'; 
import { MatCardModule } from '@angular/material'; 
import 'hammerjs';

import { AppComponent } from './app.component';
import { OdataComponent } from './components/odata/odata.component';

import { OdataService } from './services/odata.service';
import { ProvideOdataService } from './services/provide-odata.service';

@NgModule({
  declarations: [
    AppComponent,
    OdataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    OdataService,
    ProvideOdataService("http://services.odata.org/V3/(S(pq1lpmgz0kuok05ubqtx1c2g))/OData/OData.svc/")
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
