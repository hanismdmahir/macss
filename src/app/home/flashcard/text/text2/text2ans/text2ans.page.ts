import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-text2ans',
  templateUrl: './text2ans.page.html',
  styleUrls: ['./text2ans.page.scss'],
})
export class Text2ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['text3']);
  }
}
