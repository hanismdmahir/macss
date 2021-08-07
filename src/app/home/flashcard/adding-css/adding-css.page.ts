import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-css',
  templateUrl: './adding-css.page.html',
  styleUrls: ['./adding-css.page.scss'],
})
export class AddingCSSPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
exitpage() {
  this.router.navigate(['flashcard']);
}
nextpage() {
  this.router.navigate(['addcss1']);
}
}
