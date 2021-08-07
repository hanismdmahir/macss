import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-boxmodel3',
  templateUrl: './boxmodel3.page.html',
  styleUrls: ['./boxmodel3.page.scss'],
})
export class Boxmodel3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['boxmodel3ans']);
  }
    
  prevpage() {
  this.router.navigate(['boxmodel2']);
  }
}
