import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core';
import { Data } from "../../domain/data/data";
import { CurrencyPipe, NgIf, NgOptimizedImage } from "@angular/common";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MatMiniFabButton } from "@angular/material/button";
import { MobileFloorPlanComponent } from "../mobile-floor-plan/mobile-floor-plan.component";
import { FloorPlanNavigateModel } from "../../domain/modals/floor-plan-navigate.model";
import { MatDialog } from "@angular/material/dialog";

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
    NgOptimizedImage
  ],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHomeComponent {

  protected readonly propertyData = Data;

  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);

  viewFloorPlan() {
    // const dialogRef = this.dialog.open(MobileFloorPlanComponent, {
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   width: '100%',
    //   height: '100%',
    //   panelClass: 'full-screen-image',
    //   data: {
    //     imageUrl: this.currentFloorPlan
    //   }
    // });
    //
    // dialogRef.afterClosed().subscribe((result: FloorPlanNavigateModel) => {
    //   if (!result) {
    //     return;
    //   }
    //   this.goTo(result.selectedRoom);
    // });
  }
}
