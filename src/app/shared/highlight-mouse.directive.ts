import { Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
  }

  //Se não precisar de nenhuma manipulação
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //Se precisar de alguma outra manipulação
  @HostBinding('style.backgroundColor') get setColor() {
    //Código extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    /*private _elementRef: ElementRef, 
    private _renderer: Renderer2*/) {
      this.backgroundColor = '';
   }

}
