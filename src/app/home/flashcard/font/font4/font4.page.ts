import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font4',
  templateUrl: './font4.page.html',
  styleUrls: ['./font4.page.scss'],
})
export class Font4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font4ans']);
  }

  prevpage() {
  this.router.navigate(['font3']);
  }

}
