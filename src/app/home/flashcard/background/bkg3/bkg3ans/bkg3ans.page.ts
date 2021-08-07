import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkg3ans',
  templateUrl: './bkg3ans.page.html',
  styleUrls: ['./bkg3ans.page.scss'],
})
export class Bkg3ansPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
  this.router.navigate(['bkg4']);
}

  ngOnInit() {
  }

}
