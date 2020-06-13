import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './services/auth/signup/signup.component';
import { LoginComponent } from './services/auth/login/login.component';
import { ContentComponent } from './content/content.component';
import { WriteStoryComponent } from './write-story/write-story.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'signin', component: WriteStoryComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
