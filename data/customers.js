const customers = [
    {
      "id": "6413685258e40a979c5859b8",
      "email": "lucille_bradshaw@bittor.com",
      "username": "bradshaw99",
      "profile": {
        "name": {
          "first": "Lucille",
          "last": "Bradshaw"
        },
        "company": "Bittor",
        "dob": "1999-01-02",
        "address": {
          "line1": "91 Juliana Place",
          "line2": "Apt 226",
          "city": "Homeworth",
          "state": "Ohio"
        }
      },
      "transactions": [
        {
          "id": "641368524edb366b9badedc2",
          "products": [
            {
              "id": "64121406f9cfffb45b92c184",
              "productName": "New Child",
              "priceInCents": 7399
            },
            {
              "id": "64121406c33b81ffbebfddf9",
              "productName": "Deluxe Custom",
              "priceInCents": 7799
            },
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            }
          ],
          "associate": {
            "id": "6413682dc61987ff9c6419dc",
            "email": "staci_blake97@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Staci",
              "last": "Blake"
            },
            "dob": "1997-01-18"
          }
        },
        {
          "id": "64136852e1b876ec4d599fcc",
          "products": [
            {
              "id": "641214065551f8e789aa6e1e",
              "productName": "Travel",
              "priceInCents": 6599
            }
          ],
          "associate": {
            "id": "6413682d7c14216d22d1350e",
            "email": "moses_dunn88@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Moses",
              "last": "Dunn"
            },
            "dob": "1988-05-28"
          }
        },
        {
          "id": "64136852cc56e6a908b7c0c9",
          "products": [
            {
              "id": "641214061c2ed4abc8566737",
              "productName": "Vacation at Home",
              "priceInCents": 6999
            },
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        },
        {
          "id": "6413685276c3308f072f7c5a",
          "products": [
            {
              "id": "64121406d9232b860948f7fa",
              "productName": "Happy Birthday #1",
              "priceInCents": 4899
            }
          ],
          "associate": {
            "id": "6413682dc61987ff9c6419dc",
            "email": "staci_blake97@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Staci",
              "last": "Blake"
            },
            "dob": "1997-01-18"
          }
        },
        {
          "id": "64136852e8999b7e85298226",
          "products": [
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            }
          ],
          "associate": {
            "id": "6413682dc1eb4d6e0567d817",
            "email": "letitia_harding98@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Letitia",
              "last": "Harding"
            },
            "dob": "1998-04-23"
          }
        }
      ]
    },
    {
      "id": "64136852925c7617fff6091e",
      "email": "gpate@pursuit.org",
      "username": "gary84",
      "profile": {
        "name": {
          "first": "Gary",
          "last": "Pate"
        },
        "company": "Zoarere",
        "dob": "1984-03-14",
        "address": {
          "line1": "70 Pulaski Street",
          "line2": "Apt 655",
          "city": "Faywood",
          "state": "New Hampshire"
        }
      },
      "transactions": [
        {
          "id": "64136852ff110d63ef503f10",
          "products": [
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            },
            {
              "id": "64121406567e136e108d0f70",
              "productName": "Happy Birthday #2",
              "priceInCents": 7399
            },
            {
              "id": "641214065551f8e789aa6e1e",
              "productName": "Travel",
              "priceInCents": 6599
            }
          ],
          "associate": {
            "id": "6413682dc61987ff9c6419dc",
            "email": "staci_blake97@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Staci",
              "last": "Blake"
            },
            "dob": "1997-01-18"
          }
        },
        {
          "id": "641368529520edfc0709633e",
          "products": [
            {
              "id": "64121406d9232b860948f7fa",
              "productName": "Happy Birthday #1",
              "priceInCents": 4899
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        }
      ]
    },
    {
      "id": "64136852c6a50cfb165ffc09",
      "email": "zwilkins@pursuit.org",
      "username": "wilkins86",
      "profile": {
        "name": {
          "first": "Zelma",
          "last": "Wilkins"
        },
        "company": "Farmex",
        "dob": "1986-09-11",
        "address": {
          "line1": "76 Crooke Avenue",
          "line2": null,
          "city": "Gerton",
          "state": "Colorado"
        }
      },
      "transactions": [
        {
          "id": "64136852c24913e1c51848b2",
          "products": [
            {
              "id": "641214069ea81402b3c35896",
              "productName": "Custom",
              "priceInCents": 4699
            },
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            },
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            }
          ],
          "associate": {
            "id": "6413682d51868a0070651889",
            "email": "rhonda_sheppard80@example.com",
            "storeLocation": "Boulder, CO",
            "name": {
              "first": "Rhonda",
              "last": "Sheppard"
            },
            "dob": "1980-05-27"
          }
        }
      ]
    },
    {
      "id": "6413685253228979f5b0d0c1",
      "email": "lhoward@pursuit.org",
      "username": "howard84",
      "profile": {
        "name": {
          "first": "Lola",
          "last": "Howard"
        },
        "company": "Kyaguru",
        "dob": "1984-09-24",
        "address": {
          "line1": "53 Celeste Court",
          "line2": "Apt 294",
          "city": "Conway",
          "state": "Colorado"
        }
      },
      "transactions": [
        {
          "id": "641368527bc5d303fd0f18bc",
          "products": [
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            },
            {
              "id": "64121406a139859990ebaad4",
              "productName": "Museum Lover",
              "priceInCents": 6199
            },
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            }
          ],
          "associate": {
            "id": "6413682dff3ee3911e3d01c0",
            "email": "olsen_morton00@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Olsen",
              "last": "Morton"
            },
            "dob": "2000-03-27"
          }
        },
        {
          "id": "641368528bcde5b0e3adc97e",
          "products": [
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            },
            {
              "id": "641214065551f8e789aa6e1e",
              "productName": "Travel",
              "priceInCents": 6599
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        }
      ]
    },
    {
      "id": "641368520e9dc9ea95e02bfc",
      "email": "bmullins@pursuit.org",
      "username": "mullins92",
      "profile": {
        "name": {
          "first": "Brandy",
          "last": "Mullins"
        },
        "company": "Beritech",
        "dob": "1992-07-29",
        "address": {
          "line1": "20 Ainslie Street",
          "line2": "Apt 268",
          "city": "Cresaptown",
          "state": "Colorado"
        }
      },
      "transactions": [
        {
          "id": "641368520531affb1388667d",
          "products": [
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            },
            {
              "id": "641214069ea81402b3c35896",
              "productName": "Custom",
              "priceInCents": 4699
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        },
        {
          "id": "64136852e4a61a6332ce1d01",
          "products": [
            {
              "id": "64121406f9cfffb45b92c184",
              "productName": "New Child",
              "priceInCents": 7399
            }
          ],
          "associate": {
            "id": "6413682dc61987ff9c6419dc",
            "email": "staci_blake97@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Staci",
              "last": "Blake"
            },
            "dob": "1997-01-18"
          }
        },
        {
          "id": "64136852300decc015801c03",
          "products": [
            {
              "id": "641214069ea81402b3c35896",
              "productName": "Custom",
              "priceInCents": 4699
            }
          ],
          "associate": {
            "id": "6413682dff3ee3911e3d01c0",
            "email": "olsen_morton00@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Olsen",
              "last": "Morton"
            },
            "dob": "2000-03-27"
          }
        },
        {
          "id": "64136852630994602ae19ad2",
          "products": [
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            },
            {
              "id": "64121406a10b0936d0ee8198",
              "productName": "Go Sports Go!",
              "priceInCents": 6399
            },
            {
              "id": "641214065551f8e789aa6e1e",
              "productName": "Travel",
              "priceInCents": 6599
            }
          ],
          "associate": {
            "id": "6413682dc1eb4d6e0567d817",
            "email": "letitia_harding98@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Letitia",
              "last": "Harding"
            },
            "dob": "1998-04-23"
          }
        }
      ]
    },
    {
      "id": "64136852d2562cc987e0608c",
      "email": "maggie_nguyen@skyplex.edu",
      "username": "maggie95",
      "profile": {
        "name": {
          "first": "Maggie",
          "last": "Nguyen"
        },
        "company": "Skyplex",
        "dob": "1995-02-16",
        "address": {
          "line1": "78 Hoyt Street",
          "line2": null,
          "city": "Lithium",
          "state": "Georgia"
        }
      },
      "transactions": [
        {
          "id": "641368523cb48597aadb6e14",
          "products": [
            {
              "id": "6412140686b501b218f5c8c7",
              "productName": "Best Friend",
              "priceInCents": 6699
            },
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            },
            {
              "id": "64121406a139859990ebaad4",
              "productName": "Museum Lover",
              "priceInCents": 6199
            }
          ],
          "associate": {
            "id": "6413682d7c14216d22d1350e",
            "email": "moses_dunn88@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Moses",
              "last": "Dunn"
            },
            "dob": "1988-05-28"
          }
        },
        {
          "id": "641368524d8d13bccee09f54",
          "products": [
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            },
            {
              "id": "64121406c33b81ffbebfddf9",
              "productName": "Deluxe Custom",
              "priceInCents": 7799
            }
          ],
          "associate": {
            "id": "6413682dff3ee3911e3d01c0",
            "email": "olsen_morton00@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Olsen",
              "last": "Morton"
            },
            "dob": "2000-03-27"
          }
        },
        {
          "id": "64136852a87a5373ee47142c",
          "products": [
            {
              "id": "64121406d9232b860948f7fa",
              "productName": "Happy Birthday #1",
              "priceInCents": 4899
            },
            {
              "id": "641214061c2ed4abc8566737",
              "productName": "Vacation at Home",
              "priceInCents": 6999
            }
          ],
          "associate": {
            "id": "6413682dc1eb4d6e0567d817",
            "email": "letitia_harding98@example.com",
            "storeLocation": "Roanoke, VA",
            "name": {
              "first": "Letitia",
              "last": "Harding"
            },
            "dob": "1998-04-23"
          }
        }
      ]
    },
    {
      "id": "641368524070286376a2df60",
      "email": "bertie_mejia@canopoly.com",
      "username": "mejia98",
      "profile": {
        "name": {
          "first": "Bertie",
          "last": "Mejia"
        },
        "company": "Canopoly",
        "dob": "1998-11-18",
        "address": {
          "line1": "90 Sackett Street",
          "line2": null,
          "city": "Norris",
          "state": "District Of Columbia"
        }
      },
      "transactions": [
        {
          "id": "641368520c08800afb2510b9",
          "products": [
            {
              "id": "64121406815c58f24a2e2ad3",
              "productName": "Deluxe Grill Chef",
              "priceInCents": 6399
            },
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            },
            {
              "id": "641214069ea81402b3c35896",
              "productName": "Custom",
              "priceInCents": 4699
            }
          ],
          "associate": {
            "id": "6413682dff3ee3911e3d01c0",
            "email": "olsen_morton00@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Olsen",
              "last": "Morton"
            },
            "dob": "2000-03-27"
          }
        },
        {
          "id": "641368525edd9bf33dbb19f7",
          "products": [
            {
              "id": "64121406a8c8dc11cba43e92",
              "productName": "Dog Fur Baby",
              "priceInCents": 7499
            }
          ],
          "associate": {
            "id": "6413682d995ef96c745a8c82",
            "email": "harold_kramer01@example.com",
            "storeLocation": "Boulder, CO",
            "name": {
              "first": "Harold",
              "last": "Kramer"
            },
            "dob": "2001-08-29"
          }
        }
      ]
    },
    {
      "id": "64136852581fde581d2cca4e",
      "email": "sashley@pursuit.org",
      "username": "silvia88",
      "profile": {
        "name": {
          "first": "Ashley",
          "last": "Silvia"
        },
        "company": "Fangold",
        "dob": "1988-05-25",
        "address": {
          "line1": "68 Norfolk Street",
          "line2": null,
          "city": "Roy",
          "state": "New York"
        }
      },
      "transactions": [
        {
          "id": "641368524b94e75b34d17c32",
          "products": [
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            }
          ],
          "associate": {
            "id": "6413682d995ef96c745a8c82",
            "email": "harold_kramer01@example.com",
            "storeLocation": "Boulder, CO",
            "name": {
              "first": "Harold",
              "last": "Kramer"
            },
            "dob": "2001-08-29"
          }
        },
        {
          "id": "64136852cc7cca358b17f1a5",
          "products": [
            {
              "id": "641214065551f8e789aa6e1e",
              "productName": "Travel",
              "priceInCents": 6599
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        },
        {
          "id": "64136852f93cab052b7dfba2",
          "products": [
            {
              "id": "64121406daae48e0dc127028",
              "productName": "Huckleberry Lover",
              "priceInCents": 4699
            },
            {
              "id": "641214069ea81402b3c35896",
              "productName": "Custom",
              "priceInCents": 4699
            }
          ],
          "associate": {
            "id": "6413682d3baea7ee39e1b3b4",
            "email": "alexis_shields98@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Alexis",
              "last": "Shields"
            },
            "dob": "1998-11-21"
          }
        }
      ]
    },
    {
      "id": "641368522e172999c9665e1e",
      "email": "mcote@pursuit.org",
      "username": "melba81",
      "profile": {
        "name": {
          "first": "Melba",
          "last": "Cote"
        },
        "company": "Jetsilk",
        "dob": "1981-04-12",
        "address": {
          "line1": "20 Lancaster Avenue",
          "line2": null,
          "city": "Nicholson",
          "state": "Colorado"
        }
      },
      "transactions": [
        {
          "id": "64136852c9e35503150f17b9",
          "products": [
            {
              "id": "6412140686b501b218f5c8c7",
              "productName": "Best Friend",
              "priceInCents": 6699
            },
            {
              "id": "64121406a139859990ebaad4",
              "productName": "Museum Lover",
              "priceInCents": 6199
            }
          ],
          "associate": {
            "id": "6413682d3ca4a3050260a618",
            "email": "nora_beard99@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Nora",
              "last": "Beard"
            },
            "dob": "1999-12-07"
          }
        },
        {
          "id": "64136852ad715e7e53772589",
          "products": [
            {
              "id": "64121406a139859990ebaad4",
              "productName": "Museum Lover",
              "priceInCents": 6199
            }
          ],
          "associate": {
            "id": "6413682d51868a0070651889",
            "email": "rhonda_sheppard80@example.com",
            "storeLocation": "Boulder, CO",
            "name": {
              "first": "Rhonda",
              "last": "Sheppard"
            },
            "dob": "1980-05-27"
          }
        },
        {
          "id": "6413685294462658aac4fa3e",
          "products": [
            {
              "id": "64121406a8c8dc11cba43e92",
              "productName": "Dog Fur Baby",
              "priceInCents": 7499
            },
            {
              "id": "64121406c33b81ffbebfddf9",
              "productName": "Deluxe Custom",
              "priceInCents": 7799
            },
            {
              "id": "6412140686b501b218f5c8c7",
              "productName": "Best Friend",
              "priceInCents": 6699
            }
          ],
          "associate": {
            "id": "6413682d51868a0070651889",
            "email": "rhonda_sheppard80@example.com",
            "storeLocation": "Boulder, CO",
            "name": {
              "first": "Rhonda",
              "last": "Sheppard"
            },
            "dob": "1980-05-27"
          }
        }
      ]
    },
    {
      "id": "641368521074494622cc9e4b",
      "email": "sellis@pursuit.org",
      "username": "sawyer87",
      "profile": {
        "name": {
          "first": "Sawyer",
          "last": "Ellis"
        },
        "company": "Acrodance",
        "dob": "1987-07-21",
        "address": {
          "line1": "23 Railroad Avenue",
          "line2": "Apt 642",
          "city": "Muse",
          "state": "Virginia"
        }
      },
      "transactions": [
        {
          "id": "641368524a6b3015289591f7",
          "products": [
            {
              "id": "64121406f9cfffb45b92c184",
              "productName": "New Child",
              "priceInCents": 7399
            },
            {
              "id": "64121406a8c8dc11cba43e92",
              "productName": "Dog Fur Baby",
              "priceInCents": 7499
            },
            {
              "id": "641214068baa2bbbba7331bb",
              "productName": "Spring Cleaning",
              "priceInCents": 6899
            }
          ],
          "associate": {
            "id": "6413682de2c453467090f9ff",
            "email": "lucy_giles01@example.com",
            "storeLocation": "Woodstock, NY",
            "name": {
              "first": "Lucy",
              "last": "Giles"
            },
            "dob": "2001-01-20"
          }
        }
      ]
    }
  ]
module.exports = customers  