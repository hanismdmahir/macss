import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcss1',
  templateUrl: './addcss1.page.html',
  styleUrls: ['./addcss1.page.scss'],
})
export class Addcss1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next() {
    this.router.navigate(['addcss2']);
  }

}
