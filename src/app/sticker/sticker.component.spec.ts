import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StickerComponent } from './sticker.component';
import {Sticker} from './sticker';

describe('StickerComponent', () => {
  let component: StickerComponent;
  let fixture: ComponentFixture<StickerComponent>;
  let testSticker: Sticker = new Sticker();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerComponent);
    component = fixture.componentInstance;
    component.sticker = testSticker;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('the selection trigger shoould work', () => {
     let selectedSticker: Sticker;
     component.selected.subscribe((s: Sticker) => selectedSticker = s);
     component.onSelected();
     fixture.detectChanges();
     expect(selectedSticker).toBe(testSticker);

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
