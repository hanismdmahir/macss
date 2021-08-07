import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector6ans',
  templateUrl: './selector6ans.page.html',
  styleUrls: ['./selector6ans.page.scss'],
})
export class Selector6ansPage implements OnInit {

  constructor(private router: Router) { }

  exitpage() {
    this.router.navigate(['flashcard']);
    }
  ngOnInit() {
  }

}
