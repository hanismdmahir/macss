import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text4ans',
  templateUrl: './text4ans.page.html',
  styleUrls: ['./text4ans.page.scss'],
})
export class Text4ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
    this.router.navigate(['text5']);
    }
}
