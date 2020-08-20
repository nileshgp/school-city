import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestsComponent } from './tests/tests.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { TestDetailComponent } from './tests/test-detail/test-detail.component';
import { TestItemComponent } from './tests/test-list/test-item/test-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { TestStartComponent } from './tests/test-start/test-start.component';
import { TestEditComponent } from './tests/test-edit/test-edit.component';
import { TestService } from './tests/test.service';
import { OrderByPipe } from './shared/order-by.pipe';
import { SubjectsListComponent } from './tests/subjects-list/subjects-list.component';
import { SumPipe } from './shared/average.pipe';
import { Englishtest1Component } from './tests/subjects-list/englishtest1/englishtest1.component';
import { Englishtest2Component } from './tests/subjects-list/englishtest2/englishtest2.component';
import { Englishtest3Component } from './tests/subjects-list/englishtest3/englishtest3.component';
import { Mathtest1Component } from './tests/subjects-list/mathtest1/mathtest1.component';
import { Mathtest2Component } from './tests/subjects-list/mathtest2/mathtest2.component';
import { Mathtest3Component } from './tests/subjects-list/mathtest3/mathtest3.component';
import { Sciencetest3Component } from './tests/subjects-list/sciencetest3/sciencetest3.component';
import { Sciencetest2Component } from './tests/subjects-list/sciencetest2/sciencetest2.component';
import { Sciencetest1Component } from './tests/subjects-list/sciencetest1/sciencetest1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestsComponent,
    TestListComponent,
    TestDetailComponent,
    TestItemComponent,
    DropdownDirective,
    TestStartComponent,
    TestEditComponent,
    OrderByPipe,
    SumPipe,
    SubjectsListComponent,
    Englishtest1Component,
    Englishtest2Component,
    Englishtest3Component,
    Mathtest1Component,
    Mathtest2Component,
    Mathtest3Component,
    Sciencetest3Component,
    Sciencetest2Component,
    Sciencetest1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
