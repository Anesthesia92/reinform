import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {CardComponent} from './components/card/card.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatToolbarModule,
    MatCheckboxModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
