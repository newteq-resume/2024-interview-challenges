import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContentLayoutComponent {

}
