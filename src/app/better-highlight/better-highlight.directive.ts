import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //in @HostBinding we can pass a string defining to which property of the hosting element we want to bind.
  //the style is a property, the background color in particular. WE use the CamelCase because we're accessing the DOM property 
  //which doesn't know dashes.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //it takes as arguments the element reference (this.elRef.nativeElement), 
                                                                  //a css property (background-color) and a css property value (blue). It also take two other optional arguments if you want 
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { //hostListener is just a convenient way of listening to events (in this case mouseenter) on that element
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}

// this is a better approach because it uses the renderer for DOM access and to use the methods the renderer provides to access the DOM