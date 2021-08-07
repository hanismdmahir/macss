import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text7',
  templateUrl: './text7.page.html',
  styleUrls: ['./text7.page.scss'],
})
export class Text7Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text7ans']);
  }
    
  prevpage() {
  this.router.navigate(['text6']);
  }
}
