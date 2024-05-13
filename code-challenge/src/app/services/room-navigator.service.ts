import { Data } from "../domain/data/data";
import { BehaviorSubject } from "rxjs";
import { Room } from "../domain/data/room";
import { inject, Injectable } from "@angular/core";
import { FullScreenImageComponent } from "../components/full-screen-image/full-screen-image.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class RoomNavigatorService {

  private roomLoopIndex = Data.houseImageLoop.length - 1;
  private readonly roomIndexMax = Data.houseImageLoop.length - 1;
  private imageIndex = 1;
  private currentImageUrl: string = '';
  private currentFloorPlan: string = '';

  roomIndexMax$ = new BehaviorSubject<number>(this.roomIndexMax);
  roomLoopIndex$ = new BehaviorSubject<number>(this.roomLoopIndex);
  imageIndex$ = new BehaviorSubject<number>(this.imageIndex);
  currentImageUrl$ = new BehaviorSubject<string>(this.currentImageUrl);
  currentFloorPlan$ = new BehaviorSubject<string>(this.currentFloorPlan);
  currentRoom$ = new BehaviorSubject<Room>(Data.rooms[Data.houseImageLoop[this.roomLoopIndex]]);

  private dialog = inject(MatDialog);

  public goTo(room: string): void {
    if (room === 'outside') {
      this.imageIndex = 1;
    } else {
      this.imageIndex = 0;
    }
    this.roomLoopIndex = Data.houseImageLoop.indexOf(room);
    this.updateCurrentImage();

    this.imageIndex$.next(this.imageIndex);
    this.roomLoopIndex$.next(this.roomLoopIndex);
  }

  public nextImage(): void {
    this.imageIndex++;
    if (this.imageIndex >= this.currentRoom.getImageUrls().length) {
      this.roomLoopIndex++;
      if (this.roomLoopIndex > this.roomIndexMax) {
        this.roomLoopIndex = 0;
        this.roomLoopIndex$.next(this.roomLoopIndex);
      }
      this.imageIndex = 0;
    }

    this.imageIndex$.next(this.imageIndex);

    this.updateCurrentImage();
  }

  public previousImage(): void {
    this.imageIndex--;
    if (this.imageIndex < 0) {
      this.roomLoopIndex--;
      if (this.roomLoopIndex < 0) {
        this.roomLoopIndex = this.roomIndexMax;

        this.roomLoopIndex$.next(this.roomLoopIndex);
      }
      this.imageIndex = this.currentRoom.getImageUrls().length - 1;
    }

    this.imageIndex$.next(this.imageIndex);

    this.updateCurrentImage();
  }

  public updateCurrentImage(): void {
    this.currentImageUrl = this.currentRoom.getImageUrls()[this.imageIndex];
    this.currentFloorPlan = this.currentRoom.getFloorPlanImage();

    this.currentRoom$.next(this.currentRoom);
    this.currentImageUrl$.next(this.currentImageUrl);
    this.currentFloorPlan$.next(this.currentFloorPlan);
  }

  viewFullImage(): void {
    this.dialog.open(FullScreenImageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
      panelClass: 'full-screen-image',
      data: {
        imageUrl: this.currentImageUrl
      }
    });
  }

  private get currentRoom(): Room {
    return Data.rooms[Data.houseImageLoop[this.roomLoopIndex]];
  }
}
