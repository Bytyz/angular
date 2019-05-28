import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dynamicScripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/CSSPlugin.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/easing/EasePack.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenLite.min.js',
      '../../assets/js/header.js',
      
     ];
     for (let i = 0; i < dynamicScripts.length; i++) {
       const node = document.createElement('script');
       node.src = dynamicScripts[i];
       node.type = 'text/javascript';
       node.async = false;
       node.charset = 'utf-8';
       document.getElementsByTagName('head')[0].appendChild(node);
     }
   }
}
