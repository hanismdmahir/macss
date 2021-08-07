import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg4',
  templateUrl: './bkg4.page.html',
  styleUrls: ['./bkg4.page.scss'],
})
export class Bkg4Page implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}
  reveal() {
  this.router.navigate(['bkg4ans']);
}

  ngOnInit() {
  }

}
