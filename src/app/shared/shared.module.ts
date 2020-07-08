import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    PageHeaderComponent,
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
