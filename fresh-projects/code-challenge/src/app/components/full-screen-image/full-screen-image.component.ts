import { Component, inject, Inject, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatFabButton } from "@angular/material/button";
import { DialogRef } from "@angular/cdk/dialog";
import { FullScreenImageModel } from "../../domain/modals/full-screen-image.model";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-full-screen-image',
  standalone: true,
    imports: [
        NgOptimizedImage,
        MatDialogModule,
        MatFabButton,
        MatTooltip
    ],
  templateUrl: './full-screen-image.component.html',
  styleUrl: './full-screen-image.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FullScreenImageComponent {

  protected dialogRef = inject(DialogRef);

  constructor(@Inject(MAT_DIALOG_DATA) protected data: FullScreenImageModel) {
  }
}
