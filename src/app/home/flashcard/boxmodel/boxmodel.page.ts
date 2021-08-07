import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boxmodel',
  templateUrl: './boxmodel.page.html',
  styleUrls: ['./boxmodel.page.scss'],
})
export class BoxmodelPage implements OnInit {

  constructor(private router: Router) { }
  nextpage() {
    this.router.navigate(['boxmodel1']);
    }
    exitpage() {
    this.router.navigate(['flashcard']);
    }
  ngOnInit() {
  }

}
