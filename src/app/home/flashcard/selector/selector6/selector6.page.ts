import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector6',
  templateUrl: './selector6.page.html',
  styleUrls: ['./selector6.page.scss'],
})
export class Selector6Page implements OnInit {

  constructor(private router: Router) { }
  
  nextpage() {
  this.router.navigate(['selector6ans']);
  }
    
  prevpage() {
  this.router.navigate(['selector5']);
  }
  ngOnInit() {
  }

}
