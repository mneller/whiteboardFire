import { Component, OnInit} from '@angular/core';
import {Sticker} from "../sticker/sticker";
import {StickerService} from "../sticker/sticker.service";


@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
  providers: [StickerService]
})

export class WhiteboardComponent implements OnInit{
  stickers: Sticker[];
  selectedStickerId : number;

  wbTitle: String = 'Whiteboard Lesson 03';

  constructor(private stickerService: StickerService) {}

  newSticker() {
    this.stickerService.createNewSticker();
    this.stickers = this.stickerService.getStickers();
  }

  onStickerSelected(s:any) {
    this.selectedStickerId = s.stickerID;
  }

  deleteSelectedSticker() {
    this.stickerService.deleteStickerWithStickerID(this.selectedStickerId);
  }

  ngOnInit() {
    this.stickers = this.stickerService.getStickers();
  }
}
