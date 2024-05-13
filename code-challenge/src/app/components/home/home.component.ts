import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButton, MatFabButton, MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { AsyncPipe, CurrencyPipe, NgForOf, NgIf, NgOptimizedImage, NgStyle } from "@angular/common";
import { MatChip, MatChipSet } from "@angular/material/chips";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { FullScreenImageComponent } from "../full-screen-image/full-screen-image.component";
import { MatDialog } from "@angular/material/dialog";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MobileHomeComponent } from "../mobile-home/mobile-home.component";
import { HomeFullScreenComponent } from "../home-full-screen/home-full-screen.component";
import { RoomNavigatorService } from "../../services/room-navigator.service";

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
    HomeFullScreenComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  protected isSmallScreen = false;
  protected roomNavigatorService = inject(RoomNavigatorService);

  private cdr = inject(ChangeDetectorRef);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      const smallScreenBefore = this.isSmallScreen;
      this.isSmallScreen = result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small];
      if (smallScreenBefore !== this.isSmallScreen) {
        this.cdr.detectChanges();
      }
    });
    // first time load of application and house images
    this.roomNavigatorService.updateCurrentImage();
  }

}
