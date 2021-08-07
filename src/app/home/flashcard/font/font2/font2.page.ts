import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font2',
  templateUrl: './font2.page.html',
  styleUrls: ['./font2.page.scss'],
})
export class Font2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font2ans']);
  }

  prevpage() {
  this.router.navigate(['font']);
  }

}
