import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";

import { routes } from './app.routes';
import {jwtInterceptor} from "./interceptors/jwt.interceptor";
import {timeoutInterceptor} from "./interceptors/timeout.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch(), withInterceptors([jwtInterceptor, timeoutInterceptor]))]
};
