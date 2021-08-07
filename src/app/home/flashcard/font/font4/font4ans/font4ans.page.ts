import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-font4ans',
  templateUrl: './font4ans.page.html',
  styleUrls: ['./font4ans.page.scss'],
})
export class Font4ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exitpage() {
  this.router.navigate(['flashcard']);
  }

}
