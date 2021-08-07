import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg6',
  templateUrl: './bkg6.page.html',
  styleUrls: ['./bkg6.page.scss'],
})
export class Bkg6Page implements OnInit {

  constructor(private router: Router) { }
 exitpage() {
  this.router.navigate(['flashcard']);
}
  reveal() {
  this.router.navigate(['bkg6ans']);
}
  ngOnInit() {
  }

}
