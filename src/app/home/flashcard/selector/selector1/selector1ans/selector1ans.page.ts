import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector1ans',
  templateUrl: './selector1ans.page.html',
  styleUrls: ['./selector1ans.page.scss'],
})
export class Selector1ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector2']);
    }
  ngOnInit() {
  }

}
