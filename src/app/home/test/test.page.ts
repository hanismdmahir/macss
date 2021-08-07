import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  show = true;

  showp = false;
  p = false;
  pcode: string;
  // <p> seletor
  color: number;
  colorPara: string;
  colorBGPara: string;
  lspace: string;
  talign: string;
  tdeco: string;
  ttransf: string;
  wspace: string;

  bStyle: string;
  bColor = 'black';
  bWidth: string;
  bradius: string;

  ffamily: string;
  fsize: string;
  fstyle: string;
  fweight: string;

  showdialog = false;
  dialog = false;
  // class dialog seletor
  colordialog: number;
  colorParadialog: string;
  colorBGParadialog: string;
  lspacedialog: string;
  taligndialog: string;
  tdecodialog: string;
  ttransfdialog: string;
  wspacedialog: string;

  bStyledialog: string;
  bColordialog = 'black';
  bWidthdialog: string;
  bradiusdialog: string;

  ffamilydialog: string;
  fsizedialog: string;
  fstyledialog: string;
  fweightdialog: string;

  showh = false;
  head = false;
  hcode: string;
  // <h1> seletor
  colorh: number;
  colortexth: string;
  colorBGh: string;
  lspaceh: string;
  talignh: string;
  tdecoh: string;
  ttransfh: string;
  wspaceh: string;

  bStyleh: string;
  bColorh = 'black';
  bWidthh: string;
  bradiush: string;

  ffamilyh: string;
  fsizeh: string;
  fstyleh: string;
  fweighth: string;

  showbody = false;
  body = false;
  bodybkgccode = '';
  bodybkgimgcode = '';
  bodybkgrcode = '';
  bodybkgscode = '';
  bodybkgpcode = '';
  bodybdrstyle = '';
  bodybdrc = '';
  bodybdrw = '';
  bodybdrr = '';
  // body selector
  colorbody: number;
  colorparabody: string;
  colorBGparabody: string;
  lspacebody: string;
  talignbody: string;
  tdecobody: string;
  ttransfbody: string;
  wspacebody: string;

  bStylebody: string;
  bColorbody = 'black';
  bWidthbody: string;
  bradiusbody: string;

  ffamilybody: string;
  fsizebody: string;
  fstylebody: string;
  fweightbody: string;

  colorBG: string;
  bkgimg: string;
  bkgrep: string;
  bkgsize: string;
  bkgpost: string;

  showlink = false;
  link = false;
  linkcode: string;
  // link selector
  colorlink: number;
  colortextlink: string;
  colorBGlink: string;
  lspacelink: string;
  talignlink: string;
  tdecolink: string;
  ttransflink: string;
  wspacelink: string;

  bStylelink: string;
  bColorlink = 'black';
  bWidthlink: string;
  bradiuslink: string;

  ffamilylink: string;
  fsizelink: string;
  fstylelink: string;
  fweightlink: string;

  showimg = false;
  img = false;
  imgcode: string;
  // img slector
  height: string;
  width: string;
  opacity: string;
  colorimg: number;
  bStyleimg: string;
  bColorimg = 'black';
  bWidthimg: string;
  bradiusimg: string;

  showtext = false;
  showc = false;
  showlspace = false;
  showtalign = false;
  showtdeco = false;
  showttransf = false;
  showwspace = false;

  showbgc = false;
  showb = false;
  showbstyle = false;
  showbwidth = false;
  showbradius = false;

  showfont = false;
  showffamily = false;
  showfsize = false;
  showfstyle = false;
  showfweight = false;

  showbkg = false;
  showbkgimg = false;
  showbkgrep = false;
  showbkgsize = false;
  showbkgpost = false;

  showimgh = false;
  showimgw = false;
  showimgopac = false;


  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      this.bWidth = '2';
      this.bradius = '0';
      this.wspace = '0';
      this.fsize = '16';

      this.bWidthh = '2';
      this.bradiush = '0';
      this.wspaceh = '0';
      this.fsizeh = '16';

      this.bWidthdialog = '2';
      this.bradiusdialog = '0';
      this.wspacedialog = '0';
      this.fsizedialog = '16';

      this.bWidthbody = '2';
      this.bradiusbody = '0';
      this.wspacebody = '0';
      this.fsizebody = '16';

      this.bWidthlink = '2';
      this.bradiuslink = '0';
      this.wspacelink = '0';
      this.fsizelink = '16';

      this.bWidthimg = '2';
      this.bradiusimg = '0';
      this.opacity = '1';
    });
  }

  ngOnInit() {
  }

  showMenu() {
    this.show = true;
    this.showp = false;
  }

  showBody() {
    this.show = !this.show;
    this.showbody = !this.showbody;
    this.body = !this.body;
  }

  showHead() {
    this.show = !this.show;
    this.showh = !this.showh;
    this.head = !this.head;
  }

  showDialog() {
    this.show = !this.show;
    this.showdialog = !this.showdialog;
    this.dialog = !this.dialog;
  }

  showLink() {
    this.show = !this.show;
    this.showlink = !this.showlink;
    this.link = !this.link;
  }

  showImg() {
    this.show = !this.show;
    this.showimg = !this.showimg;
    this.img = !this.img;
  }

  showImgH(){
    this.showimg = !this.showimg;
    this.showimgh = !this.showimgh;
  }

  setImgH(h: string){
    this.height = h;
  }

  getImgH(){
    return this.height;
  }

  showImgW(){
    this.showimg = !this.showimg;
    this.showimgw = !this.showimgw;
  }

  setImgW(w: string){
    this.width = w;
  }

  getImgW(){
    return this.width;
  }

  showImgOpac(){
    this.showimg = !this.showimg;
    this.showimgopac = !this.showimgopac;
  }


  getImgOpac(){
    return this.opacity;
  }


  showBkg(){
    this.showbkg = !this.showbkg;
    this.showbody = !this.showbody;
  }

  showBkgImg(){
    this.showbkg = !this.showbkg;
    this.showbkgimg = !this.showbkgimg;
  }

  setBkgImg(i: string){
    this.bkgimg = i;
  }

  getBkgImg(){
    if(this.bkgimg === null)
    {
      return null;
    } else {
      return 'url(../../../assets/img/' + this.bkgimg + ')';
    }
  }

  showBkgRep(){
    this.showbkg = !this.showbkg;
    this.showbkgrep = !this.showbkgrep;
  }

  setBkgRep(i: string){
    this.bkgrep = i;
  }

  getBkgRep(){
    return this.bkgrep;
  }

  showBkgSize(){
    this.showbkg = !this.showbkg;
    this.showbkgsize = !this.showbkgsize;
  }

  setBkgSize(i: string){
    this.bkgsize = i;
  }

  getBkgSize(){
    return this.bkgsize;
  }

  showBkgPost(){
    this.showbkg = !this.showbkg;
    this.showbkgpost = !this.showbkgpost;
  }

  setBkgPost(i: string){
    this.bkgpost = i;
  }

  getBkgPost(){
    return this.bkgpost;
  }

  showP() {
    this.show = !this.show;
    this.showp = !this.showp;
    this.p = !this.p;
  }

  showText() {
    this.showtext = !this.showtext;
    if (this.body === true) {
      this.showbody = !this.showbody;
    }

    if (this.p === true) {
      this.showp = !this.showp;
    }

    if (this.link === true) {
      this.showlink = !this.showlink;
    }

    if (this.head === true) {
      this.showh = !this.showh;
    }

    if (this.dialog === true) {
      this.showdialog = !this.showdialog;
    }
  }

  showColor(i: number) {
    if (i !== 0) {
      if (this.body === true) {
        this.colorbody = i;
      }

      if (this.p === true) {
        this.color = i;
      }

      if (this.link === true) {
        this.colorlink = i;
      }

      if (this.img === true) {
        this.colorimg = i;
      }

      if (this.head === true) {
        this.colorh = i;
      }

      if (this.dialog === true) {
        this.colordialog = i;
      }
    }


    if (this.color === 1 || this.color === 2 || this.colorbody === 1 || 
      this.colorbody === 2 || this.colorlink === 1 || this.colorlink === 2
      || this.colorh === 1 || this.colorh === 2 || this.colordialog === 1 || this.colordialog === 2) {
      this.showtext = !this.showtext;
    }
    if (this.color === 3 || this.colorbody === 3 || 
      this.colorlink ===3 || this.colorimg === 3 ||
      this.colorh ===3 || this.colordialog ===3 ){
      this.showb = !this.showb;
    }

    if (this.colorbody === 4) {
      this.showbkg = !this.showbkg;
    }

    this.showc = !this.showc;

    if (this.body === true) {
      this.colorbody = i;
    }

    if (this.p === true) {
      this.color = i;
    }

    if (this.link === true) {
      this.colorlink = i;
    }

    if (this.img === true) {
      this.colorimg = i;
    }

    if (this.head === true) {
      this.colorh = i;
    }

    if (this.dialog === true) {
      this.colordialog = i;
    }

  }

  setStyleColor(kaler: string) {
    if (this.p === true) {
      if (this.color === 1) // text colour
      {
        this.colorPara = kaler;
      }
      if (this.color === 2) // background colour
      {
        this.colorBGPara = kaler;
      }

      if (this.color === 3) // border colour
      {
        this.bColor = kaler;
      }
    }

    if (this.dialog === true) {
      if (this.colordialog === 1) // text colour
      {
        this.colorParadialog = kaler;
      }
      if (this.colordialog === 2) // background colour
      {
        this.colorBGParadialog = kaler;
      }

      if (this.colordialog === 3) // border colour
      {
        this.bColordialog = kaler;
      }
    }

    if (this.head === true) {
      if (this.colorh === 1) // text colour
      {
        this.colortexth = kaler;
      }
      if (this.colorh === 2) // background colour
      {
        this.colorBGh = kaler;
      }

      if (this.colorh === 3) // border colour
      {
        this.bColorh = kaler;
      }
    }

    if (this.body === true) {
      if (this.colorbody === 1) // text colour
      {
        this.colorparabody = kaler;
      }
      if (this.colorbody === 2) // background colour
      {
        this.colorBGparabody = kaler;
      }

      if (this.colorbody === 3) // border colour
      {
        this.bColorbody = kaler;
      }

      if (this.colorbody === 4) // border colour
      {
        this.colorBG = kaler;
      }

    }

    if (this.link === true) {
      if (this.colorlink === 1) // text colour
      {
        this.colortextlink = kaler;
      }
      if (this.colorlink === 2) // background colour
      {
        this.colorBGlink = kaler;
      }

      if (this.colorlink === 3) // border colour
      {
        this.bColorlink = kaler;
      }
    }

    if (this.img === true) {

      if (this.colorimg === 3) // border colour
      {
        this.bColorimg = kaler;
      }
    }

  }

  getColorBG() {
   return this.colorBG;
  }


  getColorPara(i: number) {
    if (i === 1)// get for * selector
    {
      return this.colorparabody;
    }

    if (i === 2)// get for p selector
    {
      return this.colorPara;
    }

    if (i === 3)// get for p selector
    {
      return this.colortexth;
    }

    if (i === 4)// get for p selector
    {
      return this.colorParadialog;
    }

    if (i === 5)// get for p selector
    {
      return this.colortextlink;
    }
  }

  getBGColorPara(i: number) {
    if (i === 1)// get for * selector
    {
      return this.colorBGparabody;
    }

    if (i === 2)// get for p selector
    {
      return this.colorBGPara;
    }
    if (i === 3)// get for p selector
    {
      return this.colorBGh;
    }

    if (i === 4)// get for p selector
    {
      return this.colorBGParadialog;
    }

    if (i === 5)// get for p selector
    {
      return this.colorBGlink;
    }
  }

  showLSpace() {
    this.showtext = !this.showtext;
    this.showlspace = !this.showlspace;
  }

  getLSpace(i: number) {
    if (i === 1)// get for * selector
    {
      return this.lspacebody + 'px';
    }

    if (i === 2)// get for p selector
    {
      return this.lspace + 'px';
    }

    if (i === 3)// get for p selector
    {
      return this.lspaceh + 'px';
    }

    if (i === 4)// get for p selector
    {
      return this.lspacedialog + 'px';
    }

    if (i === 5)// get for p selector
    {
      return this.lspacelink + 'px';
    }

  }

  showTAlign() {
    this.showtext = !this.showtext;
    this.showtalign = !this.showtalign;
  }

  setTAlign(t: string) {
    if (this.body === true)// get for * selector
    {
      this.talignbody = t;
    }

    if (this.p === true)// get for p selector
    {
      this.talign = t;
    }

    if (this.dialog === true)// get for p selector
    {
      this.taligndialog = t;
    }

    if (this.head === true)// get for p selector
    {
      this.talignh = t;
    }

    if (this.link === true)// get for p selector
    {
      this.talignlink = t;
    }

  }

  getTAlign(i: number) {
    if (i === 1)// get for * selector
    {
      return this.talignbody;
    }

    if (i === 2)// get for p selector
    {
      return this.talign;
    }

    if (i === 3)// get for p selector
    {
      return this.talignh;
    }

    if (i === 4)// get for p selector
    {
      return this.taligndialog;
    }

    if (i === 5)// get for p selector
    {
      return this.talignlink;
    }
    
  }

  showTDeco() {
    this.showtext = !this.showtext;
    this.showtdeco = !this.showtdeco;
  }

  setTDeco(t: string) {
    if (this.body === true)// get for * selector
    {
      this.tdecobody = t;
    }

    if (this.p === true)// get for p selector
    {
      this.tdeco = t;
    }

    if (this.dialog === true)// get for p selector
    {
      this.tdecodialog = t;
    }

    if (this.head === true)// get for p selector
    {
      this.tdecoh = t;
    }

    if (this.link === true)// get for p selector
    {
      this.tdecolink = t;
    }
  }

  getTDeco(i: number) {
    if (i === 1)// get for * selector
    {
      return this.tdecobody;
    }

    if (i === 2)// get for p selector
    {
      return this.tdeco;
    }

    if (i === 3)// get for p selector
    {
      return this.tdecoh;
    }

    if (i === 4)// get for p selector
    {
      return this.tdecodialog;
    }

    if (i === 5)// get for p selector
    {
      return this.tdecolink;
    }
    
  }

  showTTransf() {
    this.showtext = !this.showtext;
    this.showttransf = !this.showttransf;
  }

  setTTransf(t: string) {
    if (this.body === true)// get for * selector
    {
      this.ttransfbody = t;
    }

    if (this.p === true)// get for p selector
    {
      this.ttransf = t;
    }

    if (this.head === true)// get for p selector
    {
      this.ttransfh = t;
    }

    if (this.link === true)// get for p selector
    {
      this.ttransflink = t;
    }

    if (this.dialog === true)// get for p selector
    {
      this.ttransfdialog = t;
    }

  }

  getTTransf(i: number) {
    if (i === 1)// get for * selector
    {
      return this.ttransfbody;
    }

    if (i === 2)// get for p selector
    {
      return this.ttransf;
    }

    if (i === 3)// get for p selector
    {
      return this.ttransfh;
    }

    if (i === 4)// get for p selector
    {
      return this.ttransfdialog;
    }

    if (i === 5)// get for p selector
    {
      return this.ttransflink;
    }
    
  }

  showWSpace() {
    this.showtext = !this.showtext;
    this.showwspace = !this.showwspace;
  }

  getWSpace(i: number) {
    if (i === 1)// get for * selector
    {
      if(this.body === true)
      {
        this.wspace = this.wspacebody;
        this.wspacelink = this.wspacebody;
        this.wspacedialog = this.wspacebody;
        this.wspaceh = this.wspacebody;
      }
      return this.wspacebody + 'px';
      
    }

    if (i === 2)// get for p selector
    {
      return this.wspace + 'px';
    }

    if (i === 3)// get for p selector
    {
      return this.wspaceh + 'px';
    }

    if (i === 4)// get for p selector
    {
      return this.wspacedialog + 'px';
    }

    if (i === 5)// get for p selector
    {
      return this.wspacelink + 'px';
    }
  }

  showBorder() {
    this.showb = !this.showb;
    if (this.body === true) {
      this.showbody = !this.showbody;
    }

    if (this.p === true) {
      this.showp = !this.showp;
    }

    if (this.link === true) {
      this.showlink = !this.showlink;
    }
    if (this.img === true) {
      this.showimg = !this.showimg;
    }

    if (this.head === true) {
      this.showh = !this.showh;
    }

    if (this.dialog === true) {
      this.showdialog = !this.showdialog;
    }
  }

  showBorderStyle() {
    this.showbstyle = !this.showbstyle;
    this.showb = !this.showb;
  }

  borderStyle(style: string) {
    if (this.body === true)// get for * selector
    {
      this.bStylebody = style;
    }

    if (this.p === true)// get for p selector
    {
      this.bStyle = style;
    }
    if (this.link === true)// get for p selector
    {
      this.bStylelink = style;
    }

    if (this.img === true)// get for p selector
    {
      this.bStyleimg = style;
    }

    if (this.head === true)// get for p selector
    {
      this.bStyleh = style;
    }

    if (this.dialog === true)// get for p selector
    {
      this.bStyledialog = style;
    }
  }

  getBorderStyle(i: number) {
    if (i === 1)// get for * selector
    {
      return this.bStylebody;
    }

    if (i === 2)// get for p selector
    {
      return this.bStyle;
    }

    if (i === 3)// get for p selector
    {
      return this.bStyleh;
    }

    if (i === 4)// get for p selector
    {
      return this.bStyledialog;
    }

    if (i === 5)// get for p selector
    {
      return this.bStylelink;
    }

    if (i === 6 )// get for p selector
    {
      return this.bStyleimg;
    }
    
  }

  getBorderColor(i: number) {
    if (i === 1)// get for * selector
    {
      return this.bColorbody;
    }

    if (i === 2)// get for p selector
    {
      return this.bColor;
    }

    if (i === 3)// get for p selector
    {
      return this.bColorh;
    }

    if (i === 4)// get for p selector
    {
      return this.bColordialog;
    }

    if (i === 5)// get for p selector
    {
      return this.bColorlink;
    }

    if (i === 6)// get for p selector
    {
      return this.bColorimg;
    }

  }

  showbWidth() {
    this.showbwidth = !this.showbwidth;
    this.showb = !this.showb;
  }

  getBorderWidth(i: number) {
    if (i === 1)// get for * selector
    {
      return this.bWidthbody + 'px';
    }

    if (i === 2)// get for p selector
    {
      return this.bWidth + 'px';
    }

    if (i === 3)// get for p selector
    {
      return this.bWidthh + 'px';
    }

    if (i === 4)// get for p selector
    {
      return this.bWidthdialog + 'px';
    }

    if (i === 5)// get for p selector
    {
      return this.bWidthlink + 'px';
    }

    if (i === 6)// get for p selector
    {
      return this.bWidthimg + 'px';
    }
  }

  showbRadius() {
    this.showbradius = !this.showbradius;
    this.showb = !this.showb;
  }

  getBorderRadius(i: number) {
    if (i === 1)// get for * selector
    {
      return this.bradiusbody + 'px';
    }

    if (i === 2)// get for p selector
    {
      return this.bradius + 'px';
    }

    if (i === 3)// get for p selector
    {
      return this.bradiush + 'px';
    }

    if (i === 4)// get for p selector
    {
      return this.bradiusdialog + 'px';
    }

    if (i === 2)// get for p selector
    {
      return this.bradiuslink + 'px';
    }

    if (i === 6)// get for p selector
    {
      return this.bradiusimg + 'px';
    }

  }

  showFont() {
    this.showfont = !this.showfont;
    if (this.body === true) {
      this.showbody = !this.showbody;
    }

    if (this.p === true) {
      this.showp = !this.showp;
    }

    if (this.link === true) {
      this.showlink = !this.showlink;
    }

    if (this.head === true) {
      this.showh = !this.showh;
    }

    if (this.dialog === true) {
      this.showdialog = !this.showdialog;
    }

  }

  showFFamily() {
    this.showfont = !this.showfont;
    this.showffamily = !this.showffamily;
  }

  setFFamily(f: string) {
    if (this.body === true) {
      this.ffamilybody = f;
    }

    if (this.p === true) {
      this.ffamily = f;
    }

    if (this.link === true) {
      this.ffamilylink = f;
    }

    if (this.head === true) {
      this.ffamilyh = f;
    }

    if (this.dialog === true) {
      this.ffamilydialog = f;
    }

  }

  getFFamily(i: number) {
    if (i === 1)// get for * selector
    {
      return this.ffamilybody;
    }

    if (i === 2)// get for p selector
    {
      return this.ffamily;
    }

    if (i === 3)// get for p selector
    {
      return this.ffamilyh;
    }

    if (i === 4)// get for p selector
    {
      return this.ffamilydialog;
    }

    if (i === 5)// get for p selector
    {
      return this.ffamilylink;
    }
  }

  showFSize() {
    this.showfont = !this.showfont;
    this.showfsize = !this.showfsize;
  }

  getFSize(i: number) {
    if (i === 1)// get for * selector
    {
      if(this.body === true)
      {
        this.fsize = this.fsizebody;
        this.fsizelink = this.fsizebody;
        this.fsizedialog = this.fsizebody;
        this.fsizeh = this.fsizebody;
      }
      return this.fsizebody + 'px';

    }

    if (i === 2)// get for p selector
    {
      return this.fsize + 'px';
    }

    if (i === 3)// get for p selector
    {
      return this.fsizeh + 'px';
    }

    if (i === 4)// get for p selector
    {
      return this.fsizedialog + 'px';
    }

    if (i === 5)// get for p selector
    {
      return this.fsizelink + 'px';
    }

  }

  showFStyle() {
    this.showfont = !this.showfont;
    this.showfstyle = !this.showfstyle;
  }

  setFStyle(f: string) {
    if (this.body === true) {
      this.fstylebody = f;
    }

    if (this.p === true) {
      this.fstyle = f;
    }

    if (this.link === true) {
      this.fstylelink = f;
    }

    if (this.head === true) {
      this.fstyleh = f;
    }

    if (this.dialog === true) {
      this.fstyledialog = f;
    }
  }

  getFStyle(i: number) {
    if (i === 1)// get for * selector
    {
      return this.fstylebody;
    }

    if (i === 2)// get for p selector
    {
      return this.fstyle;
    }

    if (i === 3)// get for p selector
    {
      return this.fstyleh;
    }

    if (i === 4)// get for p selector
    {
      return this.fstyledialog;
    }

    if (i === 5)// get for p selector
    {
      return this.fstylelink;
    }
  }

  showFWeight() {
    this.showfont = !this.showfont;
    this.showfweight = !this.showfweight;
  }

  setFWeight(f: string) {
    if (this.body === true) {
      this.fweightbody = f;
    }

    if (this.p === true) {
      this.fweight = f;
    }

    if (this.head === true) {
      this.fweighth = f;
    }

    if (this.link === true) {
      this.fweightlink = f;
    }

    if (this.dialog === true) {
      this.fweightdialog = f;
    }
  }

  getFWeight(i: number) {
    if (i === 1)// get for * selector
    {
      return this.fweightbody;
    }

    if (i === 2)// get for p selector
    {
      return this.fweight;
    }

    if (i === 3)// get for p selector
    {
      return this.fweighth;
    }

    if (i === 4)// get for p selector
    {
      return this.fweightdialog;
    }

    if (i === 5)// get for p selector
    {
      return this.fweightlink;
    }
  }

  getBody()
  {
    if(this.getColorBG() !== undefined)
    {
      this.bodybkgccode = 'background-color : '+ this.getColorBG() + ';';
    }
    
    if(this.getBkgImg() !== 'url(../../../assets/img/undefined)')
    {
      this.bodybkgimgcode = 'background-image : ' + this.getBkgImg() + ';';
    }

    if(this.getBkgRep() !== undefined)
    {
      this.bodybkgrcode = 'background-repeat: ' + this.getBkgRep() + ';';
    }

    
    if(this.getBkgSize() !== undefined)
    {
      this.bodybkgscode = 'background-size: ' + this.getBkgSize() + ';';
    }

    
    if(this.getBkgPost() !== undefined)
    {
      this.bodybkgpcode = 'background-position: ' + this.getBkgPost() + ';';
    }

    if(this.getBorderStyle(1) !== undefined)
    {
      this.bodybdrstyle = 'border-style: ' + this.getBorderStyle(1) + ';';
    }

    if(this.getBorderColor(1) !== undefined)
    {
      this.bodybdrc = 'border-color: ' + this.getBorderColor(1) + ';';
    }

    if(this.getBorderWidth(1) !== undefined)
    {
      this.bodybdrw = 'border-width: ' + this.getBorderWidth(1) + ';';
    }

    if(this.getBorderRadius(1) !== undefined)
    {
      this.bodybdrr = 'border-radius: ' + this.getBorderRadius(1) + ';';
    }

    return '\n' + this.bodybkgccode + '\n' + 
    this.bodybkgimgcode + '\n' +this.bodybkgrcode + '\n' +
    this.bodybkgscode + '\n' + this.bodybkgpcode + '\n' +
    this.bodybdrstyle + '\n' + this.bodybdrc + '\n' +
    this.bodybdrw + '\n' + this.bodybdrr + '\n' ;
  }
}
