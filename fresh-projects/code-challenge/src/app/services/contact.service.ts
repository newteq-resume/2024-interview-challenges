import { Injectable } from "@angular/core";
import { Data } from "../domain/data/data";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private propertyData = Data;

  call(): void {
    window.open('tel:0123456789', '_blank');
  }

  email(): void {
    window.open(`mailto:example@test.com?subject=Enquiry on ${this.propertyData.address}`, '_blank');
  }
}
