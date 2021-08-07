import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-text4',
  templateUrl: './text4.page.html',
  styleUrls: ['./text4.page.scss'],
})
export class Text4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text4ans']);
  }

  prevpage() {
  this.router.navigate(['text3']);
  }
}
