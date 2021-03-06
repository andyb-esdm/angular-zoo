import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AngularOverviewComponent } from './angular-overview/angular-overview.component';
import { ToolingComponent } from './tooling/tooling.component';
import { ZooAnimalFormComponent } from './zoo-animal-form/zoo-animal-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EnclosureCreatorComponent } from './reactive-zoo/enclosure-creator/enclosure-creator.component';
import { ApplicationStateComponent } from './reactive-zoo/application-state/application-state.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'angular-overview', component: AngularOverviewComponent},
  { path: 'tooling', component: ToolingComponent },
  { path: 'zoo-animal-form', component: ZooAnimalFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'enclosure-creator', component: EnclosureCreatorComponent },
  { path: 'application-state', component: ApplicationStateComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
