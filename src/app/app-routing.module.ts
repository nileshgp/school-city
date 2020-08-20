import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { TestStartComponent } from './tests/test-start/test-start.component';
import { TestDetailComponent } from './tests/test-detail/test-detail.component';
import { TestEditComponent } from './tests/test-edit/test-edit.component';
import { TestsResolverService } from './tests/tests-resolver.service';
import { SubjectsListComponent } from './tests/subjects-list/subjects-list.component';
import { Englishtest1Component } from './tests/subjects-list/englishtest1/englishtest1.component';
import { Englishtest2Component } from './tests/subjects-list/englishtest2/englishtest2.component';
import { Englishtest3Component } from './tests/subjects-list/englishtest3/englishtest3.component';
import { Mathtest1Component } from './tests/subjects-list/mathtest1/mathtest1.component';
import { Mathtest2Component } from './tests/subjects-list/mathtest2/mathtest2.component';
import { Mathtest3Component } from './tests/subjects-list/mathtest3/mathtest3.component';
import { Sciencetest1Component } from './tests/subjects-list/sciencetest1/sciencetest1.component';
import { Sciencetest2Component } from './tests/subjects-list/sciencetest2/sciencetest2.component';
import { Sciencetest3Component } from './tests/subjects-list/sciencetest3/sciencetest3.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/tests', pathMatch: 'full' },
  {
    path: 'tests',
    component: TestsComponent,
    children: [
      { path: '', component: TestStartComponent },
      { path: 'new', component: TestEditComponent },
      {
        path: ':id',
        component: TestDetailComponent,
        resolve: [TestsResolverService]
      },
      {
        path: ':id/edit',
        component: TestEditComponent,
        resolve: [TestsResolverService]
      }
    ]
  },
  {
    path: 'subjects-list',
    component: SubjectsListComponent,
    children: [
      {
        path: 'english-test1',
        component: Englishtest1Component,
      },
      {
        path: 'english-test2',
        component: Englishtest2Component,
      },
      {
        path: 'english-test3',
        component: Englishtest3Component,
      },
      {
        path: 'math-test1',
        component: Mathtest1Component,
      },
      {
        path: 'math-test2',
        component: Mathtest2Component,
      },
      {
        path: 'math-test3',
        component: Mathtest3Component,
      },
      {
        path: 'science-test1',
        component: Sciencetest1Component,
      },
      {
        path: 'science-test2',
        component: Sciencetest2Component,
      },
      {
        path: 'science-test3',
        component: Sciencetest3Component,
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
