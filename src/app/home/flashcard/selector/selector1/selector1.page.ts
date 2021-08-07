import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector1',
  templateUrl: './selector1.page.html',
  styleUrls: ['./selector1.page.scss'],
})
export class Selector1Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector1ans']);
    }
    exitpage() {
    this.router.navigate(['flashcard']);
    }
  ngOnInit() {
  }

}
