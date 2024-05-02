import { Routes } from '@angular/router';
import { AuthComponent } from './routes/auth/auth.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { VoteComponent } from './core/components/vote/vote.component';
import { RankingsComponent } from './core/components/rankings/rankings.component';
import { authGuard } from './core/guards/auth.guard';

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

    { path: 'vote', component: VoteComponent, canActivate: [authGuard] },

    { path: 'rankings', component: RankingsComponent, canActivate: [authGuard]}
];
