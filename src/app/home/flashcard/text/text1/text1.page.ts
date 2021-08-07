import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text1',
  templateUrl: './text1.page.html',
  styleUrls: ['./text1.page.scss'],
})
export class Text1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
    this.router.navigate(['text2']);
    }

}
