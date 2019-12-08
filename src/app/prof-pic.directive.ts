import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appProfPic]'
})
export class ProfPicDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.borderRadius = '30%';

   }
}
