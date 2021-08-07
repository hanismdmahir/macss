import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector5ans',
  templateUrl: './selector5ans.page.html',
  styleUrls: ['./selector5ans.page.scss'],
})
export class Selector5ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector6']);
    }
  ngOnInit() {
  }

}
