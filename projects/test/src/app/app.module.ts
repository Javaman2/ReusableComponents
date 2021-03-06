import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Cmp2Module } from "../../../cmp2/src/lib/cmp2.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Cmp2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
