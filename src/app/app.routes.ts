import { Routes } from '@angular/router';
import { AuthComponent } from './routes/auth/auth.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { VoteComponent } from './core/components/vote/vote.component';
import { RankingsComponent } from './core/components/rankings/rankings.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthenticatedLayoutComponent } from './core/components/authenticated-layout/authenticated-layout.component';

export const routes: Routes = [

    { path: '', redirectTo:'vote', pathMatch: 'full' },

    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
        ],
    },

    {
        path: '',
        component: AuthenticatedLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'vote', component: VoteComponent },
            { path: 'rankings', component: RankingsComponent },
        ]
    },
    { 
        path: '**', 
        redirectTo: 'vote' 
    },
];
