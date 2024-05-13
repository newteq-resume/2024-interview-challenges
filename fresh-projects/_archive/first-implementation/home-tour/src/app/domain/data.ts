import { Room } from "./room";

export class Data {
  static readonly address: string = '123 Keizersgracht, ' +
    '1015, CJ Amsterdam, ' +
    'Netherlands';
  static readonly houseDetails: string = '1 Bedroom House for Sale'
  static readonly housePrice: number = 36000;

  static readonly houseImageLoop: string[] = [
    'livingRoom',
    'bedroom',
    'bathroom',
    'balcony',
    'kitchen',
    'entrance',
    'outside'
  ]

  static readonly rooms: { [id: string]: Room } = {
    livingRoom: new Room('Living Room',
      'The living room is the heart of this enchanting Dutch home, where warmth and elegance converge to create an inviting sanctuary for relaxation and social gatherings.' +
      ' Bathed in natural light streaming through large windows, the spacious living area boasts high ceilings and an open floor plan, enhancing the sense of airiness and freedom.' +
      ' Adorned with tasteful furnishings and contemporary decor, the living room exudes understated luxury and comfort, offering ample seating arrangements for intimate conversations or cozy evenings by the fireplace.' +
      ' Whether unwinding with a good book on the plush sofa or hosting lively gatherings with friends and family, the living room provides the perfect backdrop for memorable moments and cherished memories.' +
      ' From its meticulously curated design to its serene ambiance, this living space epitomizes the quintessential Dutch lifestyle, where modern sophistication harmonizes with timeless charm.',
      [
        'living01.jpg',
        'living02.jpg',
        'living03.jpg',
        'living04.jpg',
      ],
      'living-room.png'
    ),
    bedroom: new Room('Bedroom',
      'Tucked away at the rear of the home, the bedroom is a peaceful sanctuary designed for rest and relaxation. ' +
      'Spacious and serene, the bedroom boasts plush carpeting, soothing neutral tones, and large windows that flood the space with natural light. ' +
      `A sumptuous king-sized bed takes center stage, adorned with soft linens and plump pillows for a restful night's sleep. ` +
      'Adjacent to the bed, a spacious cupboard offers ample storage for clothing and personal belongings, keeping the room tidy and organized. ' +
      'With its tranquil ambiance and thoughtful amenities, the bedroom provides a cozy retreat from the hustle and bustle of daily life.',
      [
        'bedroom01.jpg',
        'bedroom02.jpg',
        'bedroom03.jpg',
        'bedroom04.jpg',
      ],
      'bedroom.png'
    ),
    bathroom: new Room('Bathroom',
      'Nestled to the left of the entrance, the bathroom of this Dutch home exudes modern elegance and comfort. ' +
      'Featuring sleek tile flooring, crisp white walls, and contemporary fixtures, the space offers a serene retreat for relaxation and rejuvenation. ' +
      'A spacious vanity with ample storage provides convenience and functionality, while a luxurious bathtub invites you to indulge in a soothing soak after a long day. ' +
      'Soft ambient lighting and thoughtful accents create a tranquil atmosphere, transforming the bathroom into a private oasis of calm and serenity.',
      [
        'bathroom01.jpg',
        'bathroom02.jpg',
      ],
      'bathroom.png'
    ),
    balcony: new Room('Balcony',
      'Accessed from the bedroom, the balcony offers a private outdoor oasis where you can bask in the beauty of your surroundings and enjoy al fresco living at its finest. ' +
      `Overlooking the charming streets of Amsterdam, the balcony is the perfect spot for savoring morning coffee, soaking up the sun's rays, or unwinding with a glass of wine in the evening. ` +
      'A cozy bistro set provides seating for two, allowing you to dine under the stars or simply relax and take in the sights and sounds of the city below. ' +
      `With its breathtaking views and tranquil ambiance, the balcony is sure to become your favorite spot for enjoying the beauty of Amsterdam's skyline.`,
      [
        'balcony01.jpg',
      ],
      'balcony.png'
    ),
    kitchen: new Room('Kitchen',
      'Accessed through the living room, the kitchen of this Dutch home is a culinary haven where form meets function in perfect harmony. ' +
      'Bright and airy, the kitchen features stylish cabinetry, granite countertops, and state-of-the-art appliances, making meal preparation a delight. ' +
      'A large island with bar seating offers a gathering spot for casual dining or entertaining guests, while a cozy breakfast nook bathed in natural light provides the perfect setting for enjoying morning coffee and pastries. ' +
      'With its seamless blend of modern convenience and timeless charm, the kitchen is sure to inspire culinary creativity and heartfelt gatherings for years to come.',
      [
        'kitchen01.jpg',
        'kitchen02.jpg',
      ],
      'kitchen.png'
    ),
    entrance: new Room('Entrance',
      'As you step through the elegant entrance of this Dutch home, you are greeted by a spacious hallway adorned with gleaming hardwood floors and tasteful decor. ' +
      'Sunlight streams through a stained glass window, casting colorful patterns on the walls and infusing the space with warmth and vitality. ' +
      'The hallway serves as a welcoming introduction to the residence, offering ample space for guests to remove coats and shoes before venturing further into the home. ' +
      'A charming console table and mirror provide a convenient spot for keys and last-minute touch-ups, while a cozy bench invites you to pause and take in the beauty of your surroundings.',
      [
        'hallway01.jpg',
      ],
      'entrance.png'
    ),
    outside: new Room('Address',
      'Nestled along the iconic Keizersgracht canal in the heart of Amsterdam, this picturesque building stands as a timeless testament to Dutch architecture and heritage. ' +
      'With its elegant facade adorned with intricate details and charming gables, the building exudes a sense of grandeur and sophistication. ' +
      'Lush greenery and vibrant flowers cascade from window boxes, adding a touch of natural beauty to the historic streetscape. ' +
      'As sunlight dances upon the weathered bricks and centuries-old cobblestones, the building casts a warm and welcoming glow, inviting residents and visitors alike to explore its storied corridors and hidden treasures. ' +
      `From its prime location overlooking the tranquil canal waters to its rich history steeped in tradition, this enchanting building captures the essence of Amsterdam's enchanting charm and allure.`,
      [
        'outside02.jpg',
        'outside01.jpg',
      ],
      'no-room.png'
    ),
  }
}
