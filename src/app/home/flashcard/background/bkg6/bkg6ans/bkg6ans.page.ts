import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg6ans',
  templateUrl: './bkg6ans.page.html',
  styleUrls: ['./bkg6ans.page.scss'],
})
export class Bkg6ansPage implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}

  ngOnInit() {
  }

}
