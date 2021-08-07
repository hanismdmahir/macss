import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcss2',
  templateUrl: './addcss2.page.html',
  styleUrls: ['./addcss2.page.scss'],
})
export class Addcss2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  exitpage() {
  this.router.navigate(['flashcard']);
}
nextpage() {
  this.router.navigate(['addcss2ans']);
}

}
