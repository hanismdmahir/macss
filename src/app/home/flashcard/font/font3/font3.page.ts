import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font3',
  templateUrl: './font3.page.html',
  styleUrls: ['./font3.page.scss'],
})
export class Font3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font3ans']);
  }

  prevpage() {
  this.router.navigate(['font2']);
  }

}
