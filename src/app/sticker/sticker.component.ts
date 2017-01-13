import {Component, Input, EventEmitter, Output, HostListener} from '@angular/core';

import {Sticker} from './sticker';

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
  public dragMode: boolean = false;
  public mouseEntered: boolean = false;

  // *** Store the position of the MouseDownEvent: **
  private mouseDownLeft: number;
  private mouseDownTop: number;

  // *** Store the positon of the draggable element at the time of mouse down:
  private draggableLeft: number;
  private draggableTop: number;

  // *** Define the cursor: ***
    public cursor = 'text';

  // *** Inputs ***

  @Input() sticker: Sticker;
  @Output() selected = new EventEmitter<Sticker>();
  @Output() newLeftTop = new EventEmitter<Sticker>();

  // *** Constructor: ***
  constructor() {

  }

  // ******************
  // *** Listeners: ***
  // ******************
    @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
        this.mouseEntered = false;
        this.dragMode = false;
        this.cursor = 'default';
        //   console.log("*** Mouseleave id" + this.stickerID);
    }

    @HostListener('mouseenter', ['$event']) onMouseEnter(event: any) {
        this.mouseEntered = true;
        this.cursor = 'text';
        //   console.log("*** Entered id" + this.stickerID);
    }


     @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
       if (this.mouseEntered) {
           this.dragMode = true;

           // Store, where we start the mouse move
           this.mouseDownLeft = event.clientX;
           this.mouseDownTop = event.clientY;

           this.draggableLeft = this.sticker.leftValue;
           this.draggableTop = this.sticker.topValue;

           // Modify the cursor:
           this.cursor = 'move';
       }
    }



    @HostListener('mouseup', ['$event']) onMouseUp(event: any) {
        this.dragMode = false;
        this.cursor = 'text';
    }


    @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
        if (this.dragMode) {
            // calculate the move in PX since mouse down
            const deltaLeft = event.clientX - this.mouseDownLeft;
            const deltaTop = event.clientY - this.mouseDownTop;


            this.sticker.leftValue = this.draggableLeft + deltaLeft;
            this.sticker.topValue = this.draggableTop + deltaTop;
            this.newLeftTop.emit(this.sticker);
        }
     }


  // **************************
  // *** Output fucnctions: ***
  // **************************
    onSelected() {
      this.selected.emit(this.sticker);
    }

}
