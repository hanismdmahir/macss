import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.page.html',
  styleUrls: ['./flashcard.page.scss'],
})
export class FlashcardPage implements OnInit {

  constructor(private router: Router) { }
  addingCSS() {
    this.router.navigate(['adding-css']);
  }
  back() {
    this.router.navigate(['home']);
  }
  selector() {
    this.router.navigate(['selector1']);
  }
  background() {
    this.router.navigate(['background']);
  }

  font() {
    this.router.navigate(['font']);
  }

  text() {
    this.router.navigate(['text']);
  }

  boxmodel() {
    this.router.navigate(['boxmodel']);
  }

  ngOnInit() {
  }

}
