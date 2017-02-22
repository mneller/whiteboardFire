
import { TestBed, inject } from '@angular/core/testing';
import { StickerService } from './sticker.service';


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

  let nbOfStickers: number = service.getStickers().length;
  it('should be possible to add 1000 stickers ...', () => {
      for (let i = 0; i < 1000; i++) {
        service.createNewSticker();
      }
      expect(service.getStickers().length).toBe(nbOfStickers + 1000);
  });

  it('should be possible to delete all stickers ...', () => {
    for (let i = 0; i < 1000; i++) {
      service.createNewSticker();
    }
    nbOfStickers = service.getStickers().length;
    for (let i = 0; i < nbOfStickers; i++) {
      service.deleteSticker(service.getStickers()[0]);
    }
    expect(service.getStickers().length).toBe(0);
  });


  it('should be possible to delete all stickers (2)...', () => {
    const maxId: number = service.maxId;
    for (let i = 0; i < 1000; i++) {
      service.createNewSticker();
    }
    nbOfStickers = service.getStickers().length;
    for (let i = 0; i <  nbOfStickers; i++) {
      service.deleteStickerWithStickerID(maxId + i);
    }
    expect(service.getStickers().length).toBe(0);
  });

  it('getStickers by id...', () => {
    const maxId: number = service.maxId;
    for (let i = 0; i < 39; i++) {
      service.createNewSticker();
    }
    nbOfStickers = service.getStickers().length;
    for (let i = 0; i < nbOfStickers; i++) {
      expect(service.getSticker(maxId + i).stickerID).toBe(maxId + i);
    }
  });

});
