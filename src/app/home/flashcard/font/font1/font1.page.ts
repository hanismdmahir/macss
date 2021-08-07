import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font1',
  templateUrl: './font1.page.html',
  styleUrls: ['./font1.page.scss'],
})
export class Font1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font2']);
  }

}
