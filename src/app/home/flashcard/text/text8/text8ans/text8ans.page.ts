import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text8ans',
  templateUrl: './text8ans.page.html',
  styleUrls: ['./text8ans.page.scss'],
})
export class Text8ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextpage() {
  this.router.navigate(['text9']);
  }

}
