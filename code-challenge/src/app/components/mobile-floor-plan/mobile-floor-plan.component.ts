import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgOptimizedImage } from "@angular/common";
import { MatFabButton } from "@angular/material/button";
import { FullScreenImageModel } from "../../domain/modals/full-screen-image.model";

@Component({
  selector: 'app-mobile-floor-plan',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatFabButton
  ],
  templateUrl: './mobile-floor-plan.component.html',
  styleUrl: './mobile-floor-plan.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MobileFloorPlanComponent {
  protected dialogRef = inject(MatDialogRef);

  constructor(@Inject(MAT_DIALOG_DATA) protected data: FullScreenImageModel) {
  }

  goTo(roomName: string) {
    this.dialogRef.close({
      selectedRoom: roomName
    });
  }
}
