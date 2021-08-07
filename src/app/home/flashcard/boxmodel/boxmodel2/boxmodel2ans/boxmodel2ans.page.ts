import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-boxmodel2ans',
  templateUrl: './boxmodel2ans.page.html',
  styleUrls: ['./boxmodel2ans.page.scss'],
})
export class Boxmodel2ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['boxmodel3']);
  }

}
