import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg2',
  templateUrl: './bkg2.page.html',
  styleUrls: ['./bkg2.page.scss'],
})
export class Bkg2Page implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}
reveal() {
  this.router.navigate(['bkg2ans']);
}

  ngOnInit() {
  }

}
