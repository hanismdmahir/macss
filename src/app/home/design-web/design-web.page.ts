import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-web',
  templateUrl: './design-web.page.html',
  styleUrls: ['./design-web.page.scss'],
})
export class DesignWebPage implements OnInit {

  p = false;
  show = true;
  showp = false;
  showc = false;
  showbgc = false;

  colorPara1: string;
  colorBGPara1: string;

  showimg = false;

  tag = '';
  textcolor = 'color :';
  textbgcolor = 'background-color:';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['home']);
  }

  showP() {
    this.tag = 'p';
    this.p =  true;
    this.show = !this.show;
    this.showp = !this.showp;
  }

  showColor() {
    this.showp = !this.showp;
    this.showc = !this.showc;
  }

  showBGColor() {
    this.showp = !this.showp;
    this.showbgc = !this.showbgc;
  }

  setStyleColor(kaler: string) {
    this.colorPara1 = kaler;
    if(this.textcolor !== 'color:')
    {
      this.textcolor = 'color:';
    }
    this.textcolor = this.textcolor + kaler;
  }

  getColorPara1() {
    return this.colorPara1;
  }

  setBGColor(kaler: string) {
    this.colorBGPara1 = kaler;
    if(this.textbgcolor !== 'background-color:')
    {
      this.textbgcolor = 'background-color:';
    }

    this.textbgcolor = this.textbgcolor + kaler;
  }

  getBGColorPara1() {
    return this.colorBGPara1;
  }


  showImg() {
    this.tag = 'img';
    this.show = !this.show;
    this.showimg = !this.showimg;
  }

  showMenu() {
    this.p = false;
    this.show = true;
    this.showp = false;
    this.showimg = false;
    this.tag = '';
  }

}
