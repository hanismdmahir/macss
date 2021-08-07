import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector2ans',
  templateUrl: './selector2ans.page.html',
  styleUrls: ['./selector2ans.page.scss'],
})
export class Selector2ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['selector3']);
    }
  ngOnInit() {
  }

}
