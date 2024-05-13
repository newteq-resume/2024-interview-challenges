export class Room {
  readonly roomImageRoot = 'assets/house';
  readonly floorPlanImageRoot = 'assets/floorplan';

  name: string = '';
  description: string = '';

  private readonly floorPlanImage: string = '';
  private images: string[] = [];

  getImageUrls(): string[] {
    return this.images.map(x => `${this.roomImageRoot}/${x}`);
  }

  getFloorPlanImage(): string {
    return `${this.floorPlanImageRoot}/${this.floorPlanImage}`;
  }

  constructor(name: string, description: string, images: string[], floorPlanImage: string) {
    this.name = name;
    this.description = description;
    this.images = images;
    this.floorPlanImage = floorPlanImage;
  }
}
