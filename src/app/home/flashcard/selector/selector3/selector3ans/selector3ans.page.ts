import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector3ans',
  templateUrl: './selector3ans.page.html',
  styleUrls: ['./selector3ans.page.scss'],
})
export class Selector3ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector4']);
    }
  ngOnInit() {
  }

}
