import {Component, Input, EventEmitter, Output, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css'],
})
export class StickerComponent {
  // *********************
  // *** Data section: ***
  // *********************

  // *** Switch between dragMode and Normal Mode: ***
  private dragMode: boolean = false;

  // *** Store the position of the MouseDownEvent: **
  private mouseDownLeft: number;
  private mouseDownTop: number;

  // *** Store the positon of the draggable element at the time of mouse down:
  private draggableLeft: number;
  private draggableTop: number;
  //*** Inputs ***

  @Input() stickerID: number;
  @Input() stickerText: string;
  @Input() topValue: number;
  @Input() leftValue: number;
  @Output() selected = new EventEmitter();

  // *** Constructor: ***
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.position = 'absolute';
    this.element.nativeElement.style.cursor = 'text';

  }

  // ******************
  // *** Listeners: ***
  // ******************


  @HostListener('mousedown', ['$event']) onMousedown(event:any) {
    this.dragMode = true;

    // Store, where we start the mouse move
    this.mouseDownLeft = event.clientX;
    this.mouseDownTop = event.clientY;

    // Store the upper left corner of the draggable element:
    this.draggableLeft = this.element.nativeElement.offsetLeft;
    this.draggableTop = this.element.nativeElement.offsetTop;

    // Modify the cursor:
    this.element.nativeElement.style.cursor = 'move';
  }


  @HostListener('mouseup', ['$event']) onMouseup(event:any) {
    this.dragMode = false;
    this.element.nativeElement.style.cursor = 'text';
  }


  @HostListener('mousemove', ['$event']) onMousemove(event:any) {
    if (this.dragMode) {
      // calculate the move in PX since mouse down
      const deltaLeft = event.clientX - this.mouseDownLeft;
      const deltaTop = event.clientY - this.mouseDownTop;

      const newLeft = (this.draggableLeft + deltaLeft) + 'px';
      const newTop = (this.draggableTop + deltaTop) + 'px';
      this.element.nativeElement.style.left  = newLeft;
      this.element.nativeElement.style.top = newTop;
    }
  }


  // ******************
  // *** Functions: ***
  // ******************
  onSelected(){
    this.selected.emit({stickerID: this.stickerID});
    //console.log("Selected stickerID" + this.stickerID);
  }

}
