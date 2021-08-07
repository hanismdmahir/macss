import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text5ans',
  templateUrl: './text5ans.page.html',
  styleUrls: ['./text5ans.page.scss'],
})
export class Text5ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text6']);
  }
}
