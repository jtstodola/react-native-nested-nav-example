import Images from '../../assets/images'

const {
  background1,
  background2,
  background3,
  bowRider,
  cabinCruiser,
  catamaran,
  centerConsoleBoat,
  cuddyCabinBoat,
  davidCohenDingyBoats,
  deckBoat,
  dinghyBoat,
  fishingBoat,
  gameBoat,
  houseBoat,
  motorYacht,
  trawlerBoat,
} = Images

const boats = [
  {
    name: 'Fishing Boat',
    params: {
      text:
        'Built exclusively for fishing, fishing boats in different sizes are used on both salt and freshwater bodies. The immediate qualities of these boats include stability, strength, and durability to survive the fishing ventures across various kinds of waterways.',
      image: fishingBoat,
      credit: 'smudger888/wikipedia.org',
    },
  },
  {
    name: 'Dinghy Boat',
    params: {
      text:
        'A  dinghy can be a small inflatable boat usually made of rubber and comprises of cross thwarts and rowlocks that act as seats and oars, respectively.',
      image: dinghyBoat,
      credit: 'Poe Artist/Wikipedia.org',
    },
  },
  {
    name: 'Deck Boat',
    params: {
      text:
        'As the name suggests, Deck Boats come with an open deck area that provides plenty of seating arrangements for a small group of people.',
      image: deckBoat,
      credit: 'McChizzle/wikipedia.org',
    },
  },
  {
    name: 'Bowrider Boat',
    params: {
      text:
        'Moreover, these runabout-style vessels contain a swim platform for putting on wake-boards, or for swimming activities feel-good leisure boating. With its classic V-shaped bottom, Bowrider Boats offer a splendid ride across different water conditions. The usage of sterndrive power is the typical rule, but the demand for outboard engines is increasing at a high rate.',
      image: bowRider,
      credit: 'Johnny/wikipedia.org',
    },
  },
  {
    name: 'Catamaran Boat',
    params: {
      text:
        'Unlike other boats, Catamaran is a multi-hulled watercraft that features two parallel hulls of equal size. Compared to vessels with a single hull, Catamaran Boats features less hull volume, shallower draft and higher displacement.',
      image: catamaran,
      credit: 'Benh LIEU SONG/wikipedia.org',
    },
  },
  {
    name: 'Cuddy Cabins Boat',
    params: {
      text:
        'Well-suited for fishing, yachting, sailing and other water sports, Cuddy Cabins Boats is one of the most family-friendly vessels. Featuring a closed deck over the boat’s bow, the boat allows a convenient storage space and too easy navigation. The cuddy cabin boats are usually built of fibreglass and aluminium, and the minimum length is around 4.75 meters.',
      image: cuddyCabinBoat,
      credit: 'Dori/wikipedia.org',
    },
  },
  {
    name: 'Centre Console Boat',
    params: {
      text:
        'Essentially a boat that features a hull with no cabin or foredeck and the helm station in the centre of the boat, Centre Consoles are great fishing platforms. These boats are ideal for sports fishing and work in harsh offshore waterways where there is plenty of ocean fish. The essential equipment consists of bait wells, gunwale rod holders, fish lockers and outriggers, to name a few.',
      image: centerConsoleBoat,
      credit: 'wikipedia.org',
    },
  },
  {
    name: 'Houseboats',
    params: {
      text:
        'There are houseboats of different shapes and sizes across the world, offering the luxury of living on water and provide excellent recreational and holiday accommodation facilities. Houseboats, also known as Float house, incorporate broad flooring and modern amenities such as entertainment, fine dining, and proper sleeping arrangements.',
      image: houseBoat,
      credit: 'Sealle/wikipedia.org',
    },
  },
  {
    name: 'Trawler Boat',
    params: {
      text:
        'With features including a displacement hull and fuel-efficient engines, trawlers are intended for them to smoothly manoeuvre through the water bodies without exhausting much horsepower or consuming excessive fuel.',
      image: trawlerBoat,
      credit: 'Trevor Brice/wikipedia.org',
    },
  },
  {
    name: 'Cabin Cruiser Boat',
    params: {
      text:
        'Offering all the essential features of a home, Cabin Cruiser boats are great for relaxed sailing. Designed with a galley and a berth, these boats offer modern comforts like heaters, air conditioners, and power generators. In addition to a deep-V bottom, the Cabin Cruisers employ a secure shaft drive mechanism plus rudder steering and therefore are mainly suited for movement in the salty water.',
      image: cabinCruiser,
      credit: 'Tad/wikipedia.org',
    },
  },
]

export default boats
