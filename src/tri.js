// a "port" of Boris The Brave's triangle library:
// https://github.com/BorisTheBrave/grids/blob/main/src/test_updown_tri.py

const sqrt3 = Math.sqrt(3);

class Tri {

  static points_up = (a,b,c) => a+b+c===2;

  static center(a, b, c) {
    // Returns the center of a given triangle in cartesian co-ordinates
	// 0,0,1 is centered at 0,0
    return [ 0.5 +       0.5 * a +                      -0.5 * c,
            sqrt3/6 +     -sqrt3 / 6 * a + sqrt3 / 3 * b - sqrt3 / 6 * c ];
  }


  static neighbours(a, b, c) {

    return this.points_up(a, b, c) ? [
      [a - 1, b    , c    ],
      [a    , b - 1, c    ],
      [a    , b    , c - 1],
    ] : [
      [a + 1, b    , c    ],
      [a    , b + 1, c    ],
      [a    , b    , c + 1],
    ];
  }

  static pick_tri(x, y) {
    y = y - sqrt3 / 4; // grid offsets
    x = x - 0.5;
    const len = 1;
    return [
      Math.ceil(( 1 * x - sqrt3 / 3 * y) / len),
      Math.floor((    sqrt3 * 2 / 3 * y) / len) + 1,
      Math.ceil((-1 * x - sqrt3 / 3 * y) / len)
    ]
  }

}

export default Tri;
