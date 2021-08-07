import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boxmodel3ans',
  templateUrl: './boxmodel3ans.page.html',
  styleUrls: ['./boxmodel3ans.page.scss'],
})
export class Boxmodel3ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exitpage() {
  this.router.navigate(['flashcard']);
  }

}
