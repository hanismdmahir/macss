import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector2',
  templateUrl: './selector2.page.html',
  styleUrls: ['./selector2.page.scss'],
})
export class Selector2Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector2ans']);
    }
    prevpage() {
    this.router.navigate(['selector1']);
    }
  ngOnInit() {
  }

}
