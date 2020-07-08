import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AccessTokenInterceptor } from './access-token.interceptor';
import { ApiEndpointInterceptor } from './api-endpoint.interceptor';
import { HttpErrorInterceptor } from './error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ApiEndpointInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
