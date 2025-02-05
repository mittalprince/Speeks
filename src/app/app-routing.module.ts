import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { InstructionComponent } from './instruction/instruction.component';
import { VideoComponent } from './video/video.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: LandingComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'video', component: VideoComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LandingComponent,
  InstructionComponent,
  VideoComponent,
  DashboardComponent
]
