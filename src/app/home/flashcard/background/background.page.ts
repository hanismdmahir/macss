import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-background',
  templateUrl: './background.page.html',
  styleUrls: ['./background.page.scss'],
})
export class BackgroundPage implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}
nextpage() {
  this.router.navigate(['bkg1']);
}

  ngOnInit() {
  }

}
