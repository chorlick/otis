import { Routes } from '@angular/router';
import { LeapsComponent } from 'app/pages/leaps/leaps.component';
import { WheelComponent } from 'app/pages/wheel/wheel.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
//import { UserComponent } from '../../pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'wheel',          component: WheelComponent },
    { path: 'leaps',          component: LeapsComponent }
    //{ path: 'user',           component: UserComponent },
];
