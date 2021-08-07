import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector4',
  templateUrl: './selector4.page.html',
  styleUrls: ['./selector4.page.scss'],
})
export class Selector4Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector4ans']);
    }
    prevpage() {
    this.router.navigate(['selector3']);
    }
  ngOnInit() {
  }

}
