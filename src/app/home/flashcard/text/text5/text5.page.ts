import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text5',
  templateUrl: './text5.page.html',
  styleUrls: ['./text5.page.scss'],
})
export class Text5Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text5ans']);
  }
    
  prevpage() {
  this.router.navigate(['text4']);
  }
}
