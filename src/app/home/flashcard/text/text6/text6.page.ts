import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text6',
  templateUrl: './text6.page.html',
  styleUrls: ['./text6.page.scss'],
})
export class Text6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text6ans']);
  }
    
  prevpage() {
  this.router.navigate(['text5']);
  }
}
