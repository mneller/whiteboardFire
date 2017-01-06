import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';

import { StickerComponent } from './sticker.component';

describe('StickerComponent', () => {
  let component: StickerComponent;
  let fixture: ComponentFixture<StickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('mouse move should be work', () => {
    component.onMouseEnter({});
    fixture.detectChanges();
    component.onMouseDown({clientX: 10, clientY: 10});
    fixture.detectChanges();
    component.onMouseMove({clientX: 20, clientY: 30});
    fixture.detectChanges();
    component.onMouseUp({});
    fixture.detectChanges();
    // ToDo expect(component.topValue).toEqual(10);
    // ToDo expect(component.leftValue).toEqual(20);
    expect(component.dragMode).toBe(false);
  });

  it('draggable mode should be ended if the mouse is leaving', () => {
    component.onMouseEnter({});
    fixture.detectChanges();
    component.onMouseDown({clientX: 10, clientY: 10});
    fixture.detectChanges();
    component.onMouseMove({clientX: 20, clientY: 30});
    fixture.detectChanges();
    component.onMouseLeave({});

    expect(component.dragMode).toBe(false);
  });


});
