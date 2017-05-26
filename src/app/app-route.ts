import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AccountComponent } from './account/account.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserchooseComponent } from './userchoose/userchoose.component';

const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'usertype', component: UserchooseComponent},
    {path: 'home', component: HomefeedComponent},
    {path: 'assignments', component: AssignmentsComponent},
    {path: 'lessons', component: LessonsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'navbar', component: NavbarComponent}
];

export const AppRoute = RouterModule.forRoot(routes);

