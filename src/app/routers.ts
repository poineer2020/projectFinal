import { LogoutComponent } from './logout/logout.component';
import { BackComponent } from './back/back.component';
import { BrasComponent } from './graph/bras/bras.component';

import { FrontComponent } from './front/front.component';
import { GraphComponent } from './graph/graph.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurd } from './services/auth-gaurd.service';
// import { ProfileTutorComponent } from './profile-tutor/profile-tutor.component';
// import { ProfileEditTutorComponent } from './profile-edit-tutor/profile-edit-tutor.component';
// import { StudentHomeComponent } from './student-home/student-home.component';
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
// import { StudentAuthGuard } from './services/student-auth-gaurd.service';

import { from } from 'rxjs';
import { IntimateComponent } from './intimate/intimate.component';

export const appRoutes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: "\login",
        component: LoginComponent
      },
      {
        path: "\signup",
        component: RegisterComponent
      },
      
       
          {
            path:"\intimate",
            component:IntimateComponent,
          },
         
    
          {
            path:"\graph",
            component:GraphComponent,
           
            
          },
          {
            path:"\back",
        component:BackComponent,
      },
        {
          path:"\front",
          component:FrontComponent,
        },
      {
          path:"\logout",
          component:LogoutComponent,
      }

        
      
      
]