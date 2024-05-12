import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButton, MatFabButton, MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { CurrencyPipe, NgForOf, NgIf, NgOptimizedImage, NgStyle } from "@angular/common";
import { MatChip, MatChipSet } from "@angular/material/chips";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { FullScreenImageComponent } from "../full-screen-image/full-screen-image.component";
import { MatDialog } from "@angular/material/dialog";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { Data } from "../../domain/data/data";
import { Room } from "../../domain/data/room";
import { MobileFloorPlanComponent } from "../mobile-floor-plan/mobile-floor-plan.component";
import { FloorPlanNavigateModel } from "../../domain/modals/floor-plan-navigate.model";
import { MobileHomeComponent } from "../mobile-home/mobile-home.component";
import { HomeFullScreenComponent } from "../home-full-screen/home-full-screen.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    NgOptimizedImage,
    MatChip,
    MatChipSet,
    NgIf,
    NgStyle,
    NgForOf,
    MatFabButton,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    CurrencyPipe,
    MatMiniFabButton,
    MobileHomeComponent,
    HomeFullScreenComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  protected isSmallScreen = false;
  protected currentImageUrl: string = '';
  protected currentFloorPlan: string = '';

  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);



  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      this.isSmallScreen = result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small];
    });
    this.updateCurrentImage();
  }

  viewFullImage() {
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

  nextImage(): void {
    this.imageIndex++;
    if (this.imageIndex >= this.currentRoom.getImageUrls().length) {
      this.roomLoopIndex++;
      if (this.roomLoopIndex > this.roomIndexMax) {
        this.roomLoopIndex = 0;
      }
      this.imageIndex = 0;
    }
    this.updateCurrentImage();
  }

  previousImage(): void {
    this.imageIndex--;
    if (this.imageIndex < 0) {
      this.roomLoopIndex--;
      if (this.roomLoopIndex < 0) {
        this.roomLoopIndex = this.roomIndexMax;
      }
      this.imageIndex = this.currentRoom.getImageUrls().length - 1;
    }
    this.updateCurrentImage();
  }

  get currentRoom(): Room {
    return Data.rooms[Data.houseImageLoop[this.roomLoopIndex]];
  }

  private updateCurrentImage(): void {
    this.currentImageUrl = this.currentRoom.getImageUrls()[this.imageIndex];
    this.currentFloorPlan = this.currentRoom.getFloorPlanImage();
  }

  goTo(room: string) {
    if (room === 'outside') {
      this.imageIndex = 1;
    } else {
      this.imageIndex = 0;
    }
    this.roomLoopIndex = Data.houseImageLoop.indexOf(room);
    this.updateCurrentImage();
    this.cdr.detectChanges();
  }


}
