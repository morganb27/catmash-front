import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import player from 'lottie-web';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideLottieOptions } from 'ngx-lottie';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideLottieOptions({ player: () => player })]
};
