import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy {
  tests: Test[];
  subscription: Subscription;

  constructor(private testService: TestService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.subscription = this.testService.testsChanged
      .subscribe(
        (tests: Test[]) => {
          this.tests = tests;
        }
      );
    this.tests = this.testService.getTests();

    // console.log(this.tests);
  }

  onNewTest() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}


