// Original fan dialogue. Story order: original 2003 Season 1. See docs/STORY-COVERAGE.md.
export const characters={
  "SARGE": {
    "id": "SARGE",
    "color": "#b84243",
    "x": 804,
    "y": 540
  },
  "GRIF": {
    "id": "GRIF",
    "color": "#cf8539",
    "x": 720,
    "y": 540
  },
  "SIMMONS": {
    "id": "SIMMONS",
    "color": "#8e303c",
    "x": 970,
    "y": 540
  },
  "DONUT": {
    "id": "DONUT",
    "color": "#bb4c44",
    "x": 888,
    "y": 540
  },
  "LOPEZ": {
    "id": "LOPEZ",
    "color": "#816545",
    "x": 848,
    "y": 540
  },
  "CHURCH": {
    "id": "CHURCH",
    "color": "#72a8bf",
    "x": 2626,
    "y": 540
  },
  "TUCKER": {
    "id": "TUCKER",
    "color": "#37b9b2",
    "x": 2650,
    "y": 540
  },
  "CABOOSE": {
    "id": "CABOOSE",
    "color": "#284fc1",
    "x": 2590,
    "y": 540
  },
  "TEX": {
    "id": "TEX",
    "color": "#262e38",
    "x": 2616,
    "y": 540
  },
  "SHEILA": {
    "id": "SHEILA",
    "color": "#64947b"
  },
  "ROOKIE": {
    "id": "ROOKIE",
    "color": "#9cb6c2"
  },
  "VIC": {
    "id": "VIC",
    "color": "#888888"
  },
  "NARRATOR": {
    "id": "NARRATOR",
    "color": "#efc89c"
  }
};
export const episodes=[
  {
    "id": 1,
    "title": "THE POINTLESS STANDOFF",
    "player": "SIMMONS",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 1: the rivalry starts with boredom, not a conspiracy.",
    "stages": [
      {
        "kind": "scene",
        "title": "Listen to Grif and Simmons at red base",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "GRIF",
            "x": 736,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 836,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Two bases, two teams, one canyon. There must be a strategic purpose."
          ],
          [
            "GRIF",
            "The canyon has a purpose. It keeps us far away from things that matter."
          ],
          [
            "SIMMONS",
            "You could take the assignment seriously."
          ],
          [
            "GRIF",
            "I am taking my confusion very seriously."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "See the same standoff from blue base",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "TUCKER",
            "The Reds are talking again."
          ],
          [
            "CHURCH",
            "That is their most successful operation so far."
          ],
          [
            "TUCKER",
            "What do you think they are planning?"
          ],
          [
            "CHURCH",
            "Probably how to turn standing around into a promotion."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 2,
    "title": "RED’S NEW VEHICLE",
    "player": "GRIF",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 2: the Reds get a Warthog, and its name becomes an argument.",
    "stages": [
      {
        "kind": "scene",
        "title": "Inspect the Warthog delivery",
        "point": {
          "x": 882,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 782,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 882,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SIMMONS",
            "x": 982,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Command sent us a Warthog. Finally, a way to bring superior firepower to our lack of purpose."
          ],
          [
            "GRIF",
            "I would have called it a puma."
          ],
          [
            "SIMMONS",
            "The name is on the paperwork."
          ],
          [
            "GRIF",
            "That does not make the paperwork a zoologist."
          ]
        ],
        "events": []
      },
      {
        "kind": "drive",
        "title": "Test the delivery without changing the balance of power",
        "points": [
          {
            "x": 1240,
            "y": 540
          },
          {
            "x": 1732,
            "y": 540
          },
          {
            "x": 934,
            "y": 540
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Grif, drive. Simmons, supervise. Everyone else, be impressed."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Observe blue team’s reaction",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "TUCKER",
            "They got a vehicle."
          ],
          [
            "CHURCH",
            "We got another day in the canyon. Great exchange rate."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 3,
    "title": "TWO NEW RECRUITS",
    "player": "DONUT",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 3: Donut and Caboose join opposite teams.",
    "stages": [
      {
        "kind": "scene",
        "title": "Meet Donut at red base",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 636,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 736,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 836,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 936,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "Reporting for duty! Where do I put my things?"
          ],
          [
            "GRIF",
            "Anywhere that makes you harder to assign work to."
          ],
          [
            "SIMMONS",
            "Do not treat that as official advice."
          ],
          [
            "GRIF",
            "It has been field-tested."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Meet Caboose at blue base",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2336,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2436,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2536,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CABOOSE",
            "I am ready to help!"
          ],
          [
            "CHURCH",
            "That is exactly what worries me."
          ],
          [
            "TUCKER",
            "Start with not touching anything important."
          ],
          [
            "CABOOSE",
            "I can touch unimportant things very carefully."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 4,
    "title": "THE WRONG STORE",
    "player": "DONUT",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 4: Donut mistakes blue base for the store and leaves with its flag.",
    "stages": [
      {
        "kind": "scene",
        "title": "Hear the errand Grif gives Donut",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "GRIF",
            "x": 686,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SIMMONS",
            "x": 786,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 886,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "GRIF",
            "We need some supplies. The store is down the canyon."
          ],
          [
            "SIMMONS",
            "This is going to become paperwork."
          ],
          [
            "DONUT",
            "Great! I will be back before anyone misses me."
          ],
          [
            "GRIF",
            "Take your time. We are very resilient."
          ]
        ],
        "events": []
      },
      {
        "kind": "follow",
        "who": "DONUT",
        "title": "Accompany Donut to the building he thinks is the store",
        "path": [
          {
            "x": 1188,
            "y": 540
          },
          {
            "x": 1760,
            "y": 540
          },
          {
            "x": 2436,
            "y": 540
          }
        ],
        "dialogue": []
      },
      {
        "kind": "scene",
        "title": "Watch Caboose misunderstand the visitor",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "DONUT",
            "x": 2386,
            "y": 540,
            "pose": "wave"
          },
          {
            "id": "CABOOSE",
            "x": 2486,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "Is this the supply counter?"
          ],
          [
            "CABOOSE",
            "Church told me to guard the flag. It is the most important thing here."
          ],
          [
            "DONUT",
            "Then that looks like the item I need."
          ],
          [
            "CABOOSE",
            "You seem very sure. That is more sure than my instructions."
          ]
        ],
        "events": []
      },
      {
        "kind": "collect",
        "title": "Help Donut pick up what he mistakes for the supplies",
        "items": [
          {
            "type": "FLAG",
            "x": 2488,
            "y": 540
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "A FLAG IN THE OPEN",
    "player": "DONUT",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 5: the Blues pursue the flag while Donut gets lost.",
    "stages": [
      {
        "kind": "scene",
        "title": "Find out what the Blues are chasing",
        "point": {
          "x": 1968,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 1868,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 1968,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 2068,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Our flag is walking away with a Red!"
          ],
          [
            "TUCKER",
            "You might want to give Caboose more specific instructions."
          ],
          [
            "CHURCH",
            "That would require instructions for interpreting the instructions."
          ]
        ],
        "events": []
      },
      {
        "kind": "escape",
        "who": "DONUT",
        "start": {
          "x": 1890,
          "y": 540
        },
        "title": "Stay with the lost Donut as the Blues try to recover their flag",
        "path": [
          {
            "x": 1630,
            "y": 540
          },
          {
            "x": 1188,
            "y": 540
          },
          {
            "x": 902,
            "y": 540
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "I think the store has a very aggressive returns policy."
          ]
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "TELEPORTER VERSUS WARTHOG",
    "player": "GRIF",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 6: teleportation meets Warthog fire.",
    "stages": [
      {
        "kind": "scene",
        "title": "Watch the Blues use their teleporter",
        "point": {
          "x": 1994,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 1894,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 1994,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 2094,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Give us the flag."
          ],
          [
            "DONUT",
            "Should I get a receipt first?"
          ],
          [
            "TUCKER",
            "The Reds brought their new vehicle. This discussion is about to get loud."
          ]
        ],
        "events": [
          [
            1,
            "teleportBlues"
          ]
        ]
      },
      {
        "kind": "suppress",
        "title": "Help Grif and Simmons pin Church and Tucker with Warthog fire",
        "point": {
          "x": 1760,
          "y": 540
        },
        "targets": [
          "CHURCH",
          "TUCKER"
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Keep them behind cover! We are rescuing our rookie."
          ],
          [
            "GRIF",
            "I was hoping the store had a delivery option."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Let Donut return to red cover",
        "point": {
          "x": 980,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 830,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 930,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 1030,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 1130,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "I brought the supplies!"
          ],
          [
            "SARGE",
            "That is the enemy flag."
          ],
          [
            "GRIF",
            "Best shopping trip anyone here has ever taken."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 7,
    "title": "CABOOSE MEETS SHEILA",
    "player": "CABOOSE",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 7: Caboose enters Sheila to rescue Church and Tucker.",
    "stages": [
      {
        "kind": "scene",
        "title": "Join the pinned Blue team",
        "point": {
          "x": 2072,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2022,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2122,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "We are losing a fight we were not even interested in."
          ],
          [
            "TUCKER",
            "Caboose is heading for the tank."
          ],
          [
            "CHURCH",
            "That sentence should come with a siren."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Watch Caboose begin Sheila’s tutorial",
        "point": {
          "x": 2176,
          "y": 540
        },
        "cast": [
          {
            "id": "CABOOSE",
            "x": 2126,
            "y": 540,
            "pose": "wave"
          },
          {
            "id": "CHURCH",
            "x": 2226,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SHEILA",
            "Welcome to the vehicle training system."
          ],
          [
            "CABOOSE",
            "I would like to rescue my friends."
          ],
          [
            "SHEILA",
            "Please begin with the safety instructions."
          ],
          [
            "CABOOSE",
            "I am very safe when nobody is in front of me."
          ]
        ],
        "events": [
          [
            2,
            "mountCaboose"
          ]
        ]
      },
      {
        "kind": "tankPractice",
        "title": "Complete Sheila’s controls tutorial: hit three metal targets",
        "point": {
          "x": 2228,
          "y": 540
        },
        "dialogue": [
          [
            "SHEILA",
            "Aim at the metal targets. Keep your friends out of the firing lane."
          ]
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "THE FRIENDLY-FIRE DISASTER",
    "player": "GRIF",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 8: Caboose accidentally kills Church with tank fire.",
    "stages": [
      {
        "kind": "survive",
        "title": "Get through Sheila’s fire without becoming another casualty",
        "point": {
          "x": 1734,
          "y": 540
        },
        "seconds": 16,
        "foes": [],
        "tankFire": true,
        "dialogue": [
          [
            "GRIF",
            "The tank is moving! That is my signal to stop being here."
          ],
          [
            "SIMMONS",
            "Move back toward the base!"
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Witness the shot that kills Church",
        "point": {
          "x": 1864,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 1764,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 1864,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 1964,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Caboose, watch where you point that thing!"
          ],
          [
            "CABOOSE",
            "I am helping very hard."
          ],
          [
            "TUCKER",
            "Church!"
          ],
          [
            "CABOOSE",
            "Was that the wrong helping?"
          ]
        ],
        "events": [
          [
            3,
            "churchKilled"
          ]
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "THE AFTERMATH",
    "player": "SARGE",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE"
    ],
    "dead": true,
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 9: Sarge intervenes; Caboose is stuck in Sheila.",
    "stages": [
      {
        "kind": "survive",
        "title": "Fall back to red cover while Sarge brings support",
        "point": {
          "x": 1110,
          "y": 540
        },
        "seconds": 15,
        "foes": [
          "TUCKER"
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Hold on until Sarge gets here!"
          ],
          [
            "GRIF",
            "Can we hold on somewhere less visible?"
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Watch Sarge’s counterattack and Caboose’s predicament",
        "point": {
          "x": 1058,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 908,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 1008,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SIMMONS",
            "x": 1108,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 1208,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Support has arrived!"
          ],
          [
            "CABOOSE",
            "Sheila? I think the leaving part is broken."
          ],
          [
            "GRIF",
            "Good. Let the tank handle the rookie orientation."
          ]
        ],
        "events": [
          [
            2,
            "airstrike"
          ]
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "THE GHOST AND THE REINFORCEMENT",
    "player": "TUCKER",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX"
    ],
    "ghost": true,
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 10: Church returns as a ghost and Tex arrives.",
    "stages": [
      {
        "kind": "scene",
        "title": "Meet Church’s apparent ghost",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "TUCKER",
            "Church? You are supposed to be dead."
          ],
          [
            "CHURCH",
            "I noticed. Apparently even dying does not get me transferred."
          ],
          [
            "CABOOSE",
            "I knew my friend would come back."
          ],
          [
            "CHURCH",
            "You are doing a terrible job of keeping him here."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Help Tucker contact Vic for reinforcements",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "TUCKER",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "TUCKER",
            "Command? We lost Church and now the tank has locked our rookie inside."
          ],
          [
            "VIC",
            "I am putting this down as a personnel and parking issue."
          ],
          [
            "TUCKER",
            "Send somebody who can win a fight."
          ],
          [
            "VIC",
            "A freelancer is on the way. Please stop creating categories for this form."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Hear the reinforcement call and meet Tex",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2286,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2486,
            "y": 540,
            "pose": "wave"
          },
          {
            "id": "TEX",
            "x": 2586,
            "y": 540,
            "pose": "command"
          }
        ],
        "dialogue": [
          [
            "TUCKER",
            "Command sent a freelancer."
          ],
          [
            "TEX",
            "Where is the problem?"
          ],
          [
            "CHURCH",
            "It is roughly the entire canyon."
          ],
          [
            "TEX",
            "Then stand clear."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Hear Church’s warning about Tex",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "I saw Tex fight at Sidewinder. Other Blue soldiers did not get a second chance."
          ],
          [
            "TUCKER",
            "And that is the person we requested?"
          ],
          [
            "CHURCH",
            "Keep the freelancer away from Caboose. The tank already has enough problems."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 11,
    "title": "TEX’S RAID",
    "player": "TEX",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 11: Tex raids red base and injures Donut.",
    "stages": [
      {
        "kind": "scene",
        "title": "See Lopez repairing the damaged Warthog",
        "point": {
          "x": 908,
          "y": 540
        },
        "cast": [
          {
            "id": "LOPEZ",
            "x": 758,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "SARGE",
            "x": 858,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 958,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SIMMONS",
            "x": 1058,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Grif, why is our vehicle broken?"
          ],
          [
            "GRIF",
            "Because we took it to a war."
          ],
          [
            "SIMMONS",
            "Lopez is repairing it."
          ],
          [
            "GRIF",
            "Send him the blame too. He looks like he can carry it."
          ]
        ],
        "events": []
      },
      {
        "kind": "suppress",
        "title": "As Tex, pin Grif and Simmons during the raid",
        "point": {
          "x": 980,
          "y": 540
        },
        "seconds": 18,
        "foes": [],
        "dialogue": [
          [
            "SIMMONS",
            "Black armor, incoming!"
          ],
          [
            "GRIF",
            "The freelancer has found the problem. We are the problem."
          ]
        ],
        "targets": [
          "GRIF",
          "SIMMONS"
        ]
      },
      {
        "kind": "scene",
        "title": "Witness the grenade attack on Donut",
        "point": {
          "x": 816,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 616,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 716,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 816,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 916,
            "y": 540,
            "pose": "wave"
          },
          {
            "id": "TEX",
            "x": 1016,
            "y": 540,
            "pose": "command"
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "Something is attached to my helmet!"
          ],
          [
            "SIMMONS",
            "Get clear!"
          ],
          [
            "GRIF",
            "I hate the supply situation here."
          ]
        ],
        "events": [
          [
            2,
            "donutInjured"
          ],
          [
            4,
            "redsKnockedOut"
          ]
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "A CAPTURE AND AN EVACUATION",
    "player": "SARGE",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 12: Tex is captured and Donut is evacuated.",
    "stages": [
      {
        "kind": "collect",
        "title": "Recover the blue flag before Sarge’s trap closes",
        "items": [
          {
            "type": "BLUE FLAG",
            "x": 850,
            "y": 540
          }
        ],
        "player": "TEX",
        "dialogue": [
          [
            "TEX",
            "I am taking our flag back. The Reds can keep the repair bill."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Watch Sarge and Lopez trap Tex",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 636,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "LOPEZ",
            "x": 736,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "TEX",
            "x": 836,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "DONUT",
            "x": 936,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Freelancer, welcome to red hospitality."
          ],
          [
            "TEX",
            "You call this a trap?"
          ],
          [
            "SARGE",
            "I call it the one plan today that worked."
          ]
        ],
        "events": [
          [
            2,
            "texCaptured"
          ]
        ],
        "player": "SARGE"
      },
      {
        "kind": "scene",
        "title": "Help the Reds prepare Donut’s evacuation",
        "point": {
          "x": 798,
          "y": 540
        },
        "cast": [
          {
            "id": "SIMMONS",
            "x": 698,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "GRIF",
            "x": 798,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 898,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Command is taking Donut out for treatment."
          ],
          [
            "GRIF",
            "That is one way to leave the canyon."
          ],
          [
            "SARGE",
            "Nobody else is volunteering for the same method!"
          ]
        ],
        "events": [
          [
            3,
            "evacuateDonut"
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Listen to Church identify Tex",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2386,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2486,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "That freelancer is Tex. I know her."
          ],
          [
            "TUCKER",
            "You could have opened with that before she dismantled red team."
          ],
          [
            "CHURCH",
            "I was busy being a dead person."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 13,
    "title": "THE RESCUE PLAN",
    "player": "CHURCH",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "captured": true,
    "pink": false,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 13: Church plans Tex’s rescue while Grif and Simmons guard her.",
    "stages": [
      {
        "kind": "scene",
        "title": "Hear why Church wants Tex rescued",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2336,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2436,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2536,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Tex was my girlfriend. Her armor also has an AI making her worse."
          ],
          [
            "TUCKER",
            "Those are two very different problems."
          ],
          [
            "CHURCH",
            "They have become one extremely difficult problem."
          ],
          [
            "CABOOSE",
            "We can rescue the girlfriend and then ask the armor to be nicer."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Inspect the Reds guarding their prisoner",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "GRIF",
            "x": 686,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 786,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TEX",
            "x": 886,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Do not take your eyes off the prisoner."
          ],
          [
            "GRIF",
            "Is that a full-time position?"
          ],
          [
            "TEX",
            "You will find out when you blink."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 14,
    "title": "A BAD DISGUISE AND A POSSESSION",
    "player": "CHURCH",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "captured": true,
    "pink": false,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 14: a distraction frees Tex, but Caboose shoots the possessed Sarge.",
    "stages": [
      {
        "kind": "scene",
        "title": "Use the Blues’ teleporter disguise",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "TUCKER",
            "x": 2336,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2436,
            "y": 540,
            "pose": "wave"
          },
          {
            "id": "CHURCH",
            "x": 2536,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "The teleporter will make your armor black. Make the Reds think there are more freelancers."
          ],
          [
            "CABOOSE",
            "I will be a very convincing scary person."
          ],
          [
            "TUCKER",
            "Try being a convincing person first."
          ]
        ],
        "events": [
          [
            2,
            "blackDisguise"
          ]
        ]
      },
      {
        "kind": "possess",
        "title": "Help ghost Church reach and possess Sarge",
        "who": "SARGE",
        "dialogue": [
          [
            "CHURCH",
            "I can borrow Sarge long enough to get Tex out."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "See the rescue go wrong",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 636,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "SIMMONS",
            "x": 736,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TEX",
            "x": 836,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 936,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Simmons, release the prisoner. This is definitely your sergeant talking."
          ],
          [
            "SIMMONS",
            "That is an unusually reasonable order, sir."
          ],
          [
            "CABOOSE",
            "I can fix the shooting mistake this time!"
          ],
          [
            "TUCKER",
            "Caboose, wait!"
          ]
        ],
        "events": [
          [
            2,
            "releaseTex"
          ],
          [
            6,
            "sargeShot"
          ]
        ]
      }
    ]
  },
  {
    "id": 15,
    "title": "THE WRONG KIND OF FIRST AID",
    "player": "GRIF",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": false,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 15: Grif revives Sarge, who objects to the method.",
    "stages": [
      {
        "kind": "scene",
        "title": "Visit the apparent afterlife",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 736,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "CHURCH",
            "x": 836,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Is this where I finally get competent subordinates?"
          ],
          [
            "CHURCH",
            "No. I have been dead for a while and mine are still terrible."
          ],
          [
            "SARGE",
            "Then the afterlife needs a recruiting department."
          ]
        ],
        "events": []
      },
      {
        "kind": "revive",
        "who": "SARGE",
        "helper": "GRIF",
        "title": "Help Grif revive Sarge: perform 3 CPR beats",
        "point": {
          "x": 804,
          "y": 540
        },
        "dialogue": [
          [
            "GRIF",
            "Nobody else is doing anything, so apparently I am doing something."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Watch Sarge reject the explanation",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 686,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 786,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 886,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Grif saved you, sir."
          ],
          [
            "SARGE",
            "With CPR? I was shot in the head!"
          ],
          [
            "GRIF",
            "Fine. Next time I will follow the complaint procedure."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 16,
    "title": "NEW ARMOR, WRONG LANGUAGE",
    "player": "DONUT",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": true,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 16: Donut returns in pink armor; the damaged voice card leaves Lopez speaking Spanish.",
    "stages": [
      {
        "kind": "scene",
        "title": "Meet Donut after his return",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 636,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 736,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 836,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 936,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "DONUT",
            "Command patched me up and gave me replacement armor."
          ],
          [
            "GRIF",
            "They ran out of red?"
          ],
          [
            "DONUT",
            "I also brought Lopez’s speech unit. He will finally get a say in things."
          ]
        ],
        "events": []
      },
      {
        "kind": "collect",
        "title": "Bring the speech unit to Lopez",
        "items": [
          {
            "type": "VOICE CARD",
            "x": 856,
            "y": 540
          }
        ]
      },
      {
        "kind": "scene",
        "title": "Watch the voice-unit installation",
        "point": {
          "x": 798,
          "y": 540
        },
        "cast": [
          {
            "id": "SARGE",
            "x": 648,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "LOPEZ",
            "x": 748,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "SIMMONS",
            "x": 848,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "DONUT",
            "x": 948,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "SIMMONS",
            "Sir, ground yourself before touching the card."
          ],
          [
            "SARGE",
            "I have installed more equipment than—"
          ],
          [
            "LOPEZ",
            "Solo puedo hablar español."
          ],
          [
            "GRIF",
            "He has been waiting months to talk and we still cannot understand him."
          ]
        ],
        "events": [
          [
            2,
            "voiceCardSpark"
          ]
        ]
      }
    ]
  },
  {
    "id": 17,
    "title": "REPAIRS AND AN UNBURIED BODY",
    "player": "TEX",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "body": true,
    "pink": true,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 17: Tex repairs Sheila while Church discovers his body was not buried.",
    "stages": [
      {
        "kind": "work",
        "who": "TEX",
        "title": "Stay near Tex while she repairs Sheila",
        "point": {
          "x": 2202,
          "y": 540
        },
        "seconds": 10,
        "dialogue": [
          [
            "TUCKER",
            "You owe us for the rescue. The tank needs repair."
          ],
          [
            "TEX",
            "Then keep Caboose away from the controls."
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "Join Church checking the ridge",
        "point": {
          "x": 2222,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2172,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2272,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "My body is still lying here."
          ],
          [
            "TUCKER",
            "We had a lot going on."
          ],
          [
            "CHURCH",
            "I noticed. Almost all of it involved ignoring my body."
          ]
        ],
        "events": []
      },
      {
        "kind": "scene",
        "title": "Listen to Lopez try to explain himself",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "LOPEZ",
            "x": 686,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SARGE",
            "x": 786,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "SIMMONS",
            "x": 886,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "LOPEZ",
            "Necesito reparaciones y nadie me entiende."
          ],
          [
            "SARGE",
            "Outstanding attitude, Lopez!"
          ],
          [
            "SIMMONS",
            "Sir, I am not certain that was an enthusiastic response."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 18,
    "title": "CHURCH TRIES TO WARN THE REDS",
    "player": "CHURCH",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": true,
    "spawn": {
      "x": 2384,
      "y": 540
    },
    "report": "Original episode 18: Church tries to prevent Tex from wiping out the Reds.",
    "stages": [
      {
        "kind": "scene",
        "title": "Listen to Church’s reason for intervening",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CHURCH",
            "x": 2336,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2436,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "CABOOSE",
            "x": 2536,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "CHURCH",
            "Tex is going after the Reds. If she leaves, I lose my chance to remove that AI."
          ],
          [
            "TUCKER",
            "So you are saving the Reds to keep Tex here?"
          ],
          [
            "CHURCH",
            "I did not say it was a nice plan."
          ]
        ],
        "events": []
      },
      {
        "kind": "follow",
        "who": "CHURCH",
        "title": "Accompany Church toward red base to deliver the warning",
        "path": [
          {
            "x": 2020,
            "y": 540
          },
          {
            "x": 1578,
            "y": 540
          },
          {
            "x": 1110,
            "y": 540
          },
          {
            "x": 786,
            "y": 540
          }
        ],
        "dialogue": []
      },
      {
        "kind": "scene",
        "title": "Watch Caboose accidentally reveal Church’s plan",
        "point": {
          "x": 2436,
          "y": 540
        },
        "cast": [
          {
            "id": "CABOOSE",
            "x": 2336,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TEX",
            "x": 2436,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "TUCKER",
            "x": 2536,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CABOOSE",
            "The Reds have a pink person! Church went to help them so you would stay."
          ],
          [
            "TEX",
            "Church is warning them?"
          ],
          [
            "CABOOSE",
            "I was not supposed to say the helpful secret."
          ],
          [
            "TUCKER",
            "Then stop contributing to the briefing."
          ]
        ],
        "events": []
      }
    ]
  },
  {
    "id": 19,
    "title": "THE THROW ACROSS THE GULCH",
    "player": "DONUT",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "TEX",
      "LOPEZ"
    ],
    "ghost": true,
    "tank": true,
    "pink": true,
    "spawn": {
      "x": 746,
      "y": 540
    },
    "report": "Original episode 19: Donut’s grenade disables Sheila; Church reaches the dying Tex in Lopez’s body.",
    "stages": [
      {
        "kind": "scene",
        "title": "See Church’s warning lost in translation",
        "point": {
          "x": 786,
          "y": 540
        },
        "cast": [
          {
            "id": "LOPEZ",
            "x": 636,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "SARGE",
            "x": 736,
            "y": 540,
            "pose": "command"
          },
          {
            "id": "GRIF",
            "x": 836,
            "y": 540,
            "pose": "sleep"
          },
          {
            "id": "SIMMONS",
            "x": 936,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "LOPEZ",
            "Tex viene con el tanque. Están en peligro."
          ],
          [
            "SARGE",
            "Lopez, this is no time for maintenance requests!"
          ],
          [
            "SIMMONS",
            "I think he is pointing at the tank."
          ]
        ],
        "events": [
          [
            1,
            "possessLopez"
          ]
        ]
      },
      {
        "kind": "survive",
        "title": "Stay behind red cover during Tex and Sheila’s attack",
        "point": {
          "x": 1084,
          "y": 540
        },
        "seconds": 16,
        "foes": [
          "TEX"
        ],
        "tankFire": true,
        "dialogue": [
          [
            "GRIF",
            "The warning might have been a warning."
          ]
        ]
      },
      {
        "kind": "storyGrenade",
        "title": "As Donut, throw a grenade from the ridge to Sheila",
        "point": {
          "x": 1450,
          "y": 540
        },
        "dialogue": [
          [
            "DONUT",
            "That freelancer put a grenade on my helmet. I have been practicing the return."
          ]
        ],
        "target": {
          "x": 2228,
          "y": 490
        }
      },
      {
        "kind": "scene",
        "title": "Witness Tex’s final moments and Church’s response",
        "point": {
          "x": 2046,
          "y": 540
        },
        "cast": [
          {
            "id": "TEX",
            "x": 1946,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "LOPEZ",
            "x": 2046,
            "y": 540,
            "pose": "work"
          },
          {
            "id": "CABOOSE",
            "x": 2146,
            "y": 540,
            "pose": "wave"
          }
        ],
        "dialogue": [
          [
            "TEX",
            "Church… the AI is gone."
          ],
          [
            "CHURCH",
            "I wanted to get you out too."
          ],
          [
            "CABOOSE",
            "Is my friend going to be okay?"
          ],
          [
            "CHURCH",
            "Not everything gets fixed by saying that it will."
          ]
        ],
        "events": [
          [
            2,
            "texDies"
          ]
        ]
      },
      {
        "kind": "scene",
        "title": "See the AI’s escape set up the next season",
        "point": {
          "x": 2046,
          "y": 540
        },
        "cast": [
          {
            "id": "CABOOSE",
            "x": 1996,
            "y": 540,
            "pose": "argue"
          },
          {
            "id": "LOPEZ",
            "x": 2096,
            "y": 540,
            "pose": "argue"
          }
        ],
        "dialogue": [
          [
            "CABOOSE",
            "I will look after my friends now."
          ],
          [
            "CHURCH",
            "You can start by putting the weapon down."
          ],
          [
            "NARRATOR",
            "Tex’s AI escaped before she died. Nobody here understands where it went yet."
          ]
        ],
        "events": [
          [
            1,
            "aiEscape"
          ]
        ]
      }
    ]
  }
];
