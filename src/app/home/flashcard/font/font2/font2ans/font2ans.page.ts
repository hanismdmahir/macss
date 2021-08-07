import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font2ans',
  templateUrl: './font2ans.page.html',
  styleUrls: ['./font2ans.page.scss'],
})
export class Font2ansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextpage() {
  this.router.navigate(['font3']);
  }


}
