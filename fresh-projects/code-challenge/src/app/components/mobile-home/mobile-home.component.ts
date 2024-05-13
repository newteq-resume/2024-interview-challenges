import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Data } from "../../domain/data/data";
import { AsyncPipe, CurrencyPipe, NgIf, NgOptimizedImage } from "@angular/common";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MatMiniFabButton } from "@angular/material/button";
import { MobileFloorPlanComponent } from "../mobile-floor-plan/mobile-floor-plan.component";
import { FloorPlanNavigateModel } from "../../domain/modals/floor-plan-navigate.model";
import { MatDialog } from "@angular/material/dialog";
import { RoomNavigatorService } from "../../services/room-navigator.service";
import { MatTooltip } from "@angular/material/tooltip";
import { MatChip, MatChipSet } from "@angular/material/chips";

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatMiniFabButton,
    NgIf,
    NgOptimizedImage,
    AsyncPipe,
    MatTooltip,
    MatChip,
    MatChipSet
  ],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHomeComponent {

  protected readonly propertyData = Data;
  protected roomNavigatorService = inject(RoomNavigatorService);

  private dialog = inject(MatDialog);
  private currentFloorPlan: string = '';

  constructor() {
    this.roomNavigatorService.currentFloorPlan$.subscribe(currentFloorPlan => {
      this.currentFloorPlan = currentFloorPlan;
    })
  }

  viewFloorPlan() {
    const dialogRef = this.dialog.open(MobileFloorPlanComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
      panelClass: 'full-screen-image',
      data: {
        imageUrl: this.currentFloorPlan
      }
    });

    dialogRef.afterClosed().subscribe((result: FloorPlanNavigateModel) => {
      if (!result) {
        return;
      }
      this.roomNavigatorService.goTo(result.selectedRoom);
    });
  }
}
