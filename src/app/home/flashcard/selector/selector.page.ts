import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.page.html',
  styleUrls: ['./selector.page.scss'],
})
export class SelectorPage implements OnInit {

  constructor(private router: Router) { }
 selector1() {
    this.router.navigate(['selector1']);
  }
  ngOnInit() {
  }

}
