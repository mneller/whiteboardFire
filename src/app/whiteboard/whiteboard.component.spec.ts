/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { WhiteboardComponent } from './whiteboard.component';
import {StickerComponent} from '../sticker/sticker.component';
import {StickerService} from '../sticker/sticker.service';

describe('WhiteboardComponent', () => {
  let component: WhiteboardComponent;
  let fixture: ComponentFixture<WhiteboardComponent>;
  let service: StickerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhiteboardComponent,
        StickerComponent
      ],
      providers: [ StickerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardComponent);
    component = fixture.componentInstance;
    service = TestBed.get(StickerService);
    service.resetService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have 3 stickers', () => {
    fixture.detectChanges();
    expect(component.stickers.length).toBe(3);
  });

  it ('should be possilbe to add 15 stickers', () => {
    let l = component.stickers.length;
    let c = 15;

    for (let i = 0; i < c; i++) {
      component.newSticker();
      fixture.detectChanges();
    }
    expect(component.stickers.length).toBe(l + c);
  });

  it ('should be possilbe to delete sticker 1', () => {
    let l = component.stickers.length;
    let st = component.stickers[1];
    component.onStickerSelected(st);
    component.deleteSelectedSticker();
    fixture.detectChanges();

    expect(component.stickers.length).toBe(l - 1);
  });

  it ('sticker left should be corrected if outside the board side', () => {
    let st = component.stickers[1];
    st.leftValue = 10000;
    component.onNewLeftTop(st);
    fixture.detectChanges();
    expect(st.leftValue).toBe(component.boardWidth - st.widthValue);

    st.leftValue = -10000;
    component.onNewLeftTop(st);
    fixture.detectChanges();
    expect(st.leftValue).toBe(0);
  });

  it ('sticker top should be corrected if outside the board side', () => {
    let st = component.stickers[2];
    st.topValue = -10000;
    component.onNewLeftTop(st);
    fixture.detectChanges();
    expect(st.topValue).toBe(0);

    st.topValue = 10000;
    component.onNewLeftTop(st);
    fixture.detectChanges();
    expect(st.topValue).toBe(component.boardHeight - st.heightValue);

  });
});
