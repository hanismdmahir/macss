import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcss2ans',
  templateUrl: './addcss2ans.page.html',
  styleUrls: ['./addcss2ans.page.scss'],
})
export class Addcss2ansPage implements OnInit {

  constructor(private router: Router) { }
  exitpage() {
  this.router.navigate(['flashcard']);
}

  ngOnInit() {
  }

}
