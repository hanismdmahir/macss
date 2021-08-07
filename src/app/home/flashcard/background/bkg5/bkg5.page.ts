import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg5',
  templateUrl: './bkg5.page.html',
  styleUrls: ['./bkg5.page.scss'],
})
export class Bkg5Page implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}
  reveal() {
  this.router.navigate(['bkg5ans']);
}

  ngOnInit() {
  }

}
