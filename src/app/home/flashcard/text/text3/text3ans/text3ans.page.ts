import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text3ans',
  templateUrl: './text3ans.page.html',
  styleUrls: ['./text3ans.page.scss'],
})
export class Text3ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text4']);
  }
}
