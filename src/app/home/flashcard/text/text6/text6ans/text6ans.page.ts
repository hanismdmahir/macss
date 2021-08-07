import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text6ans',
  templateUrl: './text6ans.page.html',
  styleUrls: ['./text6ans.page.scss'],
})
export class Text6ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text7']);
  }
}
