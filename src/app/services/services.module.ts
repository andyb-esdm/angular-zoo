import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WikipediaArticleComponent } from './wikipedia-article/wikipedia-article.component';
import { WikipediaService } from './wikipedia.service';
import { Routes, RouterModule } from '@angular/router';

const servicesRoutes: Routes = [
  { path: 'services', component: WikipediaArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: [
    WikipediaArticleComponent
  ],
  providers: [WikipediaService]
})
export class ServicesModule { }
