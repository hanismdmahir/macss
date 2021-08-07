import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text9ans',
  templateUrl: './text9ans.page.html',
  styleUrls: ['./text9ans.page.scss'],
})
export class Text9ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exitpage() {
  this.router.navigate(['flashcard']);
  }

}
