import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector3',
  templateUrl: './selector3.page.html',
  styleUrls: ['./selector3.page.scss'],
})
export class Selector3Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector3ans']);
    }
    prevpage() {
    this.router.navigate(['selector2']);
    }
  ngOnInit() {
  }

}
