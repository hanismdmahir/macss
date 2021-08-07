import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg4ans',
  templateUrl: './bkg4ans.page.html',
  styleUrls: ['./bkg4ans.page.scss'],
})
export class Bkg4ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
  this.router.navigate(['bkg5']);
}

  ngOnInit() {
  }

}
