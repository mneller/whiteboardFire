/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { StickerService } from './sticker.service';
import {Sticker} from "./sticker";

describe('Service: Sticker (angular)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickerService]
    });
  });

  it('should ...', inject([StickerService], (service: StickerService) => {
    expect(service).toBeTruthy();
  }));
});

describe('StickerService (plain Jasmine tests)', () => {
  let service: StickerService = new StickerService();

  let nbOfStickers:number = service.getStickers().length;
  it('should be possible to add 1000 stickers ...', () => {
      for(let i=0;i < 1000; i++) {
        service.createNewSticker();
      }
      expect(service.getStickers().length).toBe(nbOfStickers + 1000);
  });

  it('should be possible to delete all stickers ...', () => {
    nbOfStickers = service.getStickers().length
    for(let i=0;i < nbOfStickers; i++) {
      service.deleteSticker(service.getStickers()[0]);
    }
    expect(service.getStickers().length).toBe(0);
  });

});