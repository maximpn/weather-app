import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
