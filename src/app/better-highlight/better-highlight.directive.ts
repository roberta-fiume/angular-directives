import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //it takes as arguments the element reference (this.elRef.nativeElement), 
                                                                  //a css property (background-color) and a css property value (blue). It also take two other optional arguments if you want 
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { //hostListener is just a convenient way of listening to events (in this case mouseenter) on that element
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { 
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}

// this is a better approach because it uses the renderer for DOM access and to use the methods the renderer provides to access the DOM