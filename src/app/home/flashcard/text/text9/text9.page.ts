import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text9',
  templateUrl: './text9.page.html',
  styleUrls: ['./text9.page.scss'],
})
export class Text9Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text9ans']);
  }
    
  prevpage() {
  this.router.navigate(['text8']);
  }
}
