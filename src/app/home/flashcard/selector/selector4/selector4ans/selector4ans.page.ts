import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector4ans',
  templateUrl: './selector4ans.page.html',
  styleUrls: ['./selector4ans.page.scss'],
})
export class Selector4ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector5']);
    }
  ngOnInit() {
  }

}
