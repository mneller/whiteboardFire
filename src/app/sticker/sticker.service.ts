import { Injectable } from '@angular/core';
import { STICKERS } from './stickers-mock-data';
import { Sticker } from './sticker';

@Injectable()
export class StickerService {
  stickers = STICKERS.map((x) => {
      return x;
  });
  maxId = STICKERS.length;

  createNewSticker(): void {
    let sticker = new Sticker();
    sticker.stickerID = (this.maxId++);
    sticker.widthValue = 120;
    sticker.heightValue = 100;
    sticker.leftValue = 0;
    sticker.topValue = 0;
    sticker.stickerText = 'hugo...';
    this.stickers.push(sticker);
  }

  deleteStickerWithStickerID(id: number) {
    this.deleteSticker(this.getSticker(id));
  }

  deleteSticker(s: Sticker) {
    const index = this.stickers.indexOf(s, 0);
    if (index > -1) {
      this.stickers.splice(index, 1);
    }
  }
  getSticker(id: number): Sticker {
    return this.stickers.filter(s => s.stickerID === id)[0];
  }

  getStickers(): Sticker[] {
    return this.stickers;
  }

  resetService() {
    // Set the service back to the initial version
    this.stickers = STICKERS.map((x) => {
      return x;
    });
    this.maxId = STICKERS.length;
  }

  constructor() { }

}
