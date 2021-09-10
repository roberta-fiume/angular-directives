import { Directive, OnInit, ElementRef } from '@angular/core'

@Directive ({
    selector: '[appBasicHighlight]' //it will be recognized whever I add appBasicHighlight (without square brackets) to an element
})

//overwrite style with the directive
export class BasicHighlightDirecive implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}