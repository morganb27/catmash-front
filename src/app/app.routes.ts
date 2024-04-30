import { Routes } from '@angular/router';
import { AuthComponent } from './routes/auth/auth.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';

export const routes: Routes = [

    { path: '', redirectTo:'auth/sign-in', pathMatch: 'full' },

    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
        ],
    },
];
