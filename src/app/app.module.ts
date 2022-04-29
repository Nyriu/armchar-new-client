import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdvancementComponent } from './advancement/advancement.component';
import { AdvancementListComponent } from './advancement/advancement-list.component';
import { PregameAdvancementListComponent } from './advancement/pregame-advancement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancementComponent,
    AdvancementListComponent,
    PregameAdvancementListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
