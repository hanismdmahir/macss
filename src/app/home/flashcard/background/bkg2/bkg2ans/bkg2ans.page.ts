import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg2ans',
  templateUrl: './bkg2ans.page.html',
  styleUrls: ['./bkg2ans.page.scss'],
})
export class Bkg2ansPage implements OnInit {

  constructor(private router: Router) { }
   nextpage() {
  this.router.navigate(['bkg3']);
}

  ngOnInit() {
  }

}
