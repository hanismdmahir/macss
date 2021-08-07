import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bkg5ans',
  templateUrl: './bkg5ans.page.html',
  styleUrls: ['./bkg5ans.page.scss'],
})
export class Bkg5ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
  this.router.navigate(['bkg6']);
}

  ngOnInit() {
  }

}
