import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //in @HostBinding we can pass a string defining to which property of the hosting element we want to bind.
  //the style is a property, the background color in particular. WE use the CamelCase because we're accessing the DOM property 
  //which doesn't know dashes.
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // @Input('appBetterHighlight') highlightColor: string = 'blue'; //option to bind to directive selector
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); //it takes as arguments the element reference (this.elRef.nativeElement), 
    //a css property (background-color) and a css property value (blue). It also take two other optional arguments if you want 
    this.backgroundColor = this.defaultColor;
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { //hostListener is just a convenient way of listening to events (in this case mouseenter) on that element
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}

// this is a better approach because it uses the renderer for DOM access and to use the methods the renderer provides to access the DOM