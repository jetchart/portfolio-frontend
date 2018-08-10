import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';

//Routes array
const appRoutes : Routes = [
  // {path: '', comopnent: HomeComponent}
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent}
  //{path: '**', comopnent: HomeComponent}
];

//Export Routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
