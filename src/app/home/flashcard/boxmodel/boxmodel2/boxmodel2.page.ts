import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boxmodel2',
  templateUrl: './boxmodel2.page.html',
  styleUrls: ['./boxmodel2.page.scss'],
})
export class Boxmodel2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['boxmodel2ans']);
  }
    
  prevpage() {
  this.router.navigate(['boxmodel']);
  }

}
