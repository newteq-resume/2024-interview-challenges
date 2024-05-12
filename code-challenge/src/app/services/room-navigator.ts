import { Data } from "../domain/data/data";

export class RoomNavigator {
  private roomLoopIndex = Data.houseImageLoop.length - 1;
  private readonly roomIndexMax = Data.houseImageLoop.length - 1;
  private imageIndex = 1;

  public static goTo(): void {

  }
}
