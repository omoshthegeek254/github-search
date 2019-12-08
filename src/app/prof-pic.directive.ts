import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appProfPic]'
})
export class ProfPicDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='line-through';
  }

}
