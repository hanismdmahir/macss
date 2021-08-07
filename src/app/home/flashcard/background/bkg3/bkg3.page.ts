import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg3',
  templateUrl: './bkg3.page.html',
  styleUrls: ['./bkg3.page.scss'],
})
export class Bkg3Page implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}
reveal() {
  this.router.navigate(['bkg3ans']);
}


  ngOnInit() {
  }

}
