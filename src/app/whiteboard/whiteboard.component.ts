import { Component, OnInit} from '@angular/core';
import {Sticker} from "../sticker/sticker";
import {StickerService} from "../sticker/sticker.service";


@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
  providers: [StickerService]
})

export class WhiteboardComponent implements OnInit {
    public stickers: Sticker[];
    public selectedSticker : Sticker;

    private wbTitle: String = 'Whiteboard Lesson 03';

    private boardWidth: number = 1000;
    private boardHeight: number = 500;

    constructor(private stickerService: StickerService) {

    }

    newSticker() {
        this.stickerService.createNewSticker();
        this.stickers = this.stickerService.getStickers();
    }

    onStickerSelected(s: Sticker) {
        this.selectedSticker = s;
    }

    onNewLeftTop(s: Sticker) {
        // Ensure the sticker stays on the whiteboard
        if (s.leftValue < 0) {
            s.leftValue = 0;
        }
        if ((s.leftValue + s.widthValue) > this.boardWidth) {
            s.leftValue = this.boardWidth - s.widthValue;
        }
        if (s.topValue < 0) {
            s.topValue = 0;
        }
        if ((s.topValue + s.heightValue) > this.boardHeight) {
            s.topValue = this.boardHeight - s.heightValue;
        }
    }

    deleteSelectedSticker() {
        this.stickerService.deleteStickerWithStickerID(this.selectedSticker.stickerID);
    }

    ngOnInit() {
        this.stickers = this.stickerService.getStickers();
    }
}
