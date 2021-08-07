import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-text2',
  templateUrl: './text2.page.html',
  styleUrls: ['./text2.page.scss'],
})
export class Text2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text2ans']);
  }

  prevpage() {
  this.router.navigate(['text']);
  }
}
