import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-text8',
  templateUrl: './text8.page.html',
  styleUrls: ['./text8.page.scss'],
})
export class Text8Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text8ans']);
  }
    
  prevpage() {
  this.router.navigate(['text7']);
  }

}
