import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text7ans',
  templateUrl: './text7ans.page.html',
  styleUrls: ['./text7ans.page.scss'],
})
export class Text7ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextpage() {
  this.router.navigate(['text8']);
  }

}
