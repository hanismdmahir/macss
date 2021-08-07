import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font3ans',
  templateUrl: './font3ans.page.html',
  styleUrls: ['./font3ans.page.scss'],
})
export class Font3ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font4']);
  }


}
