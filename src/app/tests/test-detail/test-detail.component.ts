import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  test: Test;
  id: number;

  constructor(public testService: TestService,
    // was private
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.test = this.testService.getTest(this.id);
        }
      );
  }



  onEditTest() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteTest() {
    this.testService.deleteTest(this.id);
    this.router.navigate(['/tests']);
  }
}
