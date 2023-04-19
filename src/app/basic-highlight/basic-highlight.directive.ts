import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  //Angular injectarà els paràmetres que li indiquem al constructor que li arribin
  constructor (private elementRef: ElementRef){
  }

  ngOnInit() {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
