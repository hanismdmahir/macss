import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boxmodel1',
  templateUrl: './boxmodel1.page.html',
  styleUrls: ['./boxmodel1.page.scss'],
})
export class Boxmodel1Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['boxmodel2']);
    }

  ngOnInit() {
  }

}
