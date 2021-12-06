
// Angular modules
import { NgModule } from '@angular/core';

import { NgxMatTuiCalendarModule } from 'ngx-mat-tui-calendar';

// project modules
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxMatTuiCalendarModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
