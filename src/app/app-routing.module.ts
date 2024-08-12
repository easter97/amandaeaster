import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'resume', component: ResumeComponent},
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  { path: 'projects/:projectId', component: ProjectDetailsComponent },
  {path: '404', component:NotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
