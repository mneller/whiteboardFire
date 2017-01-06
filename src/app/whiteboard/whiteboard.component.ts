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
    private selectedStickerId : number;

    private wbTitle: String = 'Whiteboard Lesson 03';

    private boardWidth: number = 1000;
    private boardHeight: number = 500;

    constructor(private stickerService: StickerService) {

    }

    newSticker() {
        this.stickerService.createNewSticker();
        this.stickers = this.stickerService.getStickers();
    }

    onStickerSelected(s:any) {
        this.selectedStickerId = s.stickerID;
    }

    onNewLeftTop(s: any) {
        //console.log(s);
        const sticker = this.stickerService.getSticker(s.stickerId);
        if (s.leftValue > 0 && (s.leftValue + sticker.widthValue) <= this.boardWidth) {
            sticker.leftValue = s.leftValue;
        }
        if (s.topValue   > 0 && (s.topValue + sticker.heightValue) <= this.boardHeight) {
            sticker.topValue = s.topValue;
        }
    }

    deleteSelectedSticker() {
        this.stickerService.deleteStickerWithStickerID(this.selectedStickerId);
    }

    ngOnInit() {
        this.stickers = this.stickerService.getStickers();
    }
}
