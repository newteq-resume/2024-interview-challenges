import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Data } from "../../domain/data/data";
import { AsyncPipe, CurrencyPipe, NgIf, NgOptimizedImage } from "@angular/common";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MatButton, MatFabButton } from "@angular/material/button";
import { RoomNavigatorService } from "../../services/room-navigator.service";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-home-full-screen',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatAccordion,
    MatButton,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFabButton,
    NgIf,
    NgOptimizedImage,
    AsyncPipe,
    MatTooltip
  ],
  templateUrl: './home-full-screen.component.html',
  styleUrl: './home-full-screen.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFullScreenComponent {

  @ViewChild('houseImageContainer') houseImageContainer!: ElementRef<HTMLElement>;
  @ViewChild('houseImage') houseImage!: ElementRef<HTMLImageElement>;
  @ViewChild('houseImageClickable') houseImageClickable!: ElementRef<HTMLElement>;
  @ViewChild('floorImageContainer') floorImageContainer!: ElementRef<HTMLElement>;
  @ViewChild('floorImage') floorImage!: ElementRef<HTMLImageElement>;
  @ViewChild('floorImageClickable') floorImageClickable!: ElementRef<HTMLElement>;

  protected readonly propertyData = Data;
  protected roomNavigatorService = inject(RoomNavigatorService);

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.adjustOverlay();
    this.adjustFloorOverlay();
  }

  adjustOverlay() {
    const { naturalWidth, naturalHeight } = this.houseImage.nativeElement;
    const ratio = naturalWidth / naturalHeight;
    const containerWidth = this.houseImageContainer.nativeElement.clientWidth;
    const containerHeight = this.houseImageContainer.nativeElement.clientHeight;

    let overlayWidth, overlayHeight;

    if (containerWidth / containerHeight > ratio) {
      overlayHeight = containerHeight;
      overlayWidth = overlayHeight * ratio;
    } else {
      overlayWidth = containerWidth;
      overlayHeight = overlayWidth / ratio;
    }

    this.houseImageClickable.nativeElement.style.width = `${overlayWidth}px`;
    this.houseImageClickable.nativeElement.style.height = `${overlayHeight}px`;
  }

  adjustFloorOverlay(): void {
    const { naturalWidth, naturalHeight } = this.floorImage.nativeElement;
    const ratio = naturalWidth / naturalHeight;
    const containerWidth = this.floorImageContainer.nativeElement.clientWidth;
    const containerHeight = this.floorImageContainer.nativeElement.clientHeight;

    let overlayWidth, overlayHeight;

    if (containerWidth / containerHeight > ratio) {
      overlayHeight = containerHeight;
      overlayWidth = overlayHeight * ratio;
    } else {
      overlayWidth = containerWidth;
      overlayHeight = overlayWidth / ratio;
    }

    this.floorImageClickable.nativeElement.style.width = `${overlayWidth}px`;
    this.floorImageClickable.nativeElement.style.height = `${overlayHeight}px`;
  }
}
