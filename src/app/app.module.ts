import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './shared/pipes/test.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIncep } from './core/interceptor/http.interceptor';
import { ExceptionHandlerService } from './core/services/exception-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIncep,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ExceptionHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
