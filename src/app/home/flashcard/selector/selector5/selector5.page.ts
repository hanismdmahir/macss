import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector5',
  templateUrl: './selector5.page.html',
  styleUrls: ['./selector5.page.scss'],
})
export class Selector5Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector5ans']);
    }
    prevpage() {
    this.router.navigate(['selector4']);
    }
  ngOnInit() {
  }

}
