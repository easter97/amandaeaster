import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=_3AwzZmQZKAHHpEHFJ-xpQ2&v=2';
    script.id = 'script_myregistry_giftlist_iframe';
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
