import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text3',
  templateUrl: './text3.page.html',
  styleUrls: ['./text3.page.scss'],
})
export class Text3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text3ans']);
  }

  prevpage() {
  this.router.navigate(['text2']);
  }

}
