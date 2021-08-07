import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg1',
  templateUrl: './bkg1.page.html',
  styleUrls: ['./bkg1.page.scss'],
})
export class Bkg1Page implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
  this.router.navigate(['bkg2']);
}

  ngOnInit() {
  }

}
