/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';

import { WhiteboardComponent } from './whiteboard.component';
import {StickerComponent} from "../sticker/sticker.component";

describe('WhiteboardComponent', () => {
  let component: WhiteboardComponent;
  let fixture: ComponentFixture<WhiteboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhiteboardComponent,
        StickerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have 3 stickers', () => {
      expect(component.stickers.length).toBe(3);
  });
/* ToDo: How to test movement?
  it ('sticker 1 should be moveable', () => {
    let s: StickerComponent;

    let x = s.topValue;
    let y = s.leftValue;
    s.onMouseEnter({});
    s.onMouseDown({clientX: x + 10, clientY: y + 10});
    s.onMouseMove({clientX: x + 10, clientY: y + 30});
    s.onMouseUp({});
    expect(s.topValue).toEqual(x + 10);
    expect(s.leftValue).toEqual(y + 30);
  });
*/
});
