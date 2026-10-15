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
            "You ever wonder why we’re here?"
          ],
          [
            "GRIF",
            "You mean whether life is an accident, or whether God has some sort of plan? I have spent nights thinking about that."
          ],
          [
            "SIMMONS",
            "I meant our assignment. Why put us in this canyon?"
          ],
          [
            "GRIF",
            "Right. The canyon. Forget the other thing."
          ],
          [
            "SIMMONS",
            "We guard this base because the Blues have a base. They guard theirs because we have ours."
          ],
          [
            "GRIF",
            "So if we win, all we get is an empty canyon."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "What are those two Reds doing now?"
          ],
          [
            "CHURCH",
            "Still talking. You keep asking me the same question."
          ],
          [
            "TUCKER",
            "You have the sniper scope. I cannot see what you can see."
          ],
          [
            "CHURCH",
            "Then stop asking for a new report every few seconds."
          ],
          [
            "SARGE",
            "Grif! Simmons! Get down here in front of the base."
          ]
        ],
        "events": [],
        "player": "TUCKER",
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "TUCKER",
      "LOPEZ"
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
          },
          {
            "id": "LOPEZ",
            "x": 1104,
            "y": 540,
            "pose": "work"
          }
        ],
        "dialogue": [
          [
            "SARGE",
            "Lopez and I have a new reconnaissance vehicle to show you. Command calls it a Warthog."
          ],
          [
            "GRIF",
            "Those hooks look more like a big cat to me. I would call it a puma."
          ],
          [
            "SARGE",
            "We are keeping the name Warthog. Command is also sending us a new recruit."
          ],
          [
            "SIMMONS",
            "The recruit will need to learn the chain of command."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Driving practice is a gameplay addition. In the episode, the argument over the vehicle continues."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "The Reds have a new vehicle. What is it supposed to look like?"
          ],
          [
            "CHURCH",
            "Some kind of cat. I cannot think of the name."
          ],
          [
            "TUCKER",
            "You mean a puma?"
          ],
          [
            "CHURCH",
            "That is the one."
          ]
        ],
        "events": [],
        "player": "TUCKER",
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
    ],
    "tank": true,
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
            "Private Donut reporting. I just arrived from basic training."
          ],
          [
            "GRIF",
            "I am Grif. The maroon one is Simmons."
          ],
          [
            "SIMMONS",
            "Remember that Sarge is in charge here."
          ],
          [
            "GRIF",
            "First assignment: find some elbow grease and headlight fluid. Try the store farther down the canyon."
          ],
          [
            "DONUT",
            "Understood. I will go get the supplies."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "I am the new Blue recruit. Is this where I report?"
          ],
          [
            "CHURCH",
            "Yes. And Command delivered a tank with you."
          ],
          [
            "TUCKER",
            "We finally get a tank and nobody here knows how to operate it."
          ],
          [
            "CHURCH",
            "Apparently sending the equipment and training someone to use it are separate ideas."
          ]
        ],
        "events": [],
        "player": "CABOOSE",
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
  },
  {
    "id": 4,
    "title": "THE WRONG STORE",
    "player": "CABOOSE",
    "roster": [
      "SARGE",
      "GRIF",
      "SIMMONS",
      "CHURCH",
      "TUCKER",
      "DONUT",
      "CABOOSE",
      "LOPEZ"
    ],
    "tank": false,
    "pink": false,
    "spawn": {
      "x": 2436,
      "y": 540
    },
    "report": "Original episode 4: Donut mistakes blue base for the store and leaves with its flag.",
    "stages": [
      {
        "kind": "scene",
        "title": "Hear Church assign the rookie to guard the flag",
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
            "I have a girlfriend back home."
          ],
          [
            "TUCKER",
            "A girlfriend? You never mentioned that."
          ],
          [
            "CABOOSE",
            "Is she the cow you were talking about?"
          ],
          [
            "CHURCH",
            "Go inside and guard our flag. A General will be coming for an inspection."
          ],
          [
            "TUCKER",
            "Stay with the flag until the General arrives."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
        "dialogue": [
          [
            "NARRATOR",
            "Donut is looking for the imaginary supplies Grif requested. He mistakes Blue Base for a shop."
          ]
        ],
        "player": "DONUT",
        "start": {
          "x": 850,
          "y": 540
        },
        "dialogueStyle": "adapted"
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
            "I am looking for headlight fluid and elbow grease. Is this the store?"
          ],
          [
            "CABOOSE",
            "Are you the General? I was told to expect an inspection."
          ],
          [
            "DONUT",
            "I am just a private. What have you got in stock?"
          ],
          [
            "CABOOSE",
            "There is only the flag."
          ],
          [
            "DONUT",
            "Then I will take that. I do not want to return with nothing."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
        ],
        "dialogue": [
          [
            "NARRATOR",
            "Caboose lets Donut take the flag because he thinks the visitor is the General."
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
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
            "CABOOSE",
            "The General came by and took the flag."
          ],
          [
            "CHURCH",
            "That was a Red! You let him walk off with our flag?"
          ],
          [
            "TUCKER",
            "He is still out in the canyon. We can catch him."
          ],
          [
            "SIMMONS",
            "Grif, the Blues are shooting at our new recruit. Get the Warthog."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "I do not know why they are firing at me. I was only trying to get the supplies."
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
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
            "Stop! Give our flag back."
          ],
          [
            "DONUT",
            "I am not a General. I am a private."
          ],
          [
            "TUCKER",
            "What if the teleporter sent us into the past? Maybe this is Sarge before he became a sergeant."
          ],
          [
            "CHURCH",
            "The teleporter did not turn the enemy into a time-travel problem."
          ]
        ],
        "events": [
          [
            1,
            "teleportBlues"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "The Blues are behind that rock. Keep the chaingun on their position."
          ],
          [
            "GRIF",
            "I am driving. You handle the gun."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "I found a flag instead of the supplies."
          ],
          [
            "SIMMONS",
            "That belongs to the Blue Team."
          ],
          [
            "GRIF",
            "The rookie accidentally completed a real mission."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
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
            "Their chaingun has us pinned."
          ],
          [
            "TUCKER",
            "Caboose is heading for our tank."
          ],
          [
            "CHURCH",
            "He has not been trained to drive it."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "Vehicle training is beginning. Follow the operating instructions."
          ],
          [
            "CABOOSE",
            "There are six pedals, but only four directions to drive. I do not understand the extra pedals."
          ],
          [
            "SHEILA",
            "The tutorial will explain the controls."
          ],
          [
            "GRIF",
            "Simmons, leave the Warthog here. We can try to get around them on foot."
          ]
        ],
        "events": [
          [
            2,
            "mountCaboose"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "This target drill teaches the game controls. It is an added activity, not a scene from the episode."
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
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
            "The tank is right behind us! Get away from the Warthog!"
          ],
          [
            "SIMMONS",
            "Keep running!"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Caboose, the tank is firing automatically. Turn that mode off!"
          ],
          [
            "SHEILA",
            "Automatic targeting remains active."
          ],
          [
            "TUCKER",
            "The shot hit Church!"
          ],
          [
            "CABOOSE",
            "I was trying to save him."
          ]
        ],
        "events": [
          [
            3,
            "churchKilled"
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "CABOOSE",
      "LOPEZ"
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
            "SARGE",
            "This is Sarge. What is happening down there?"
          ],
          [
            "SIMMONS",
            "The Blues have brought their tank into the fight."
          ],
          [
            "SARGE",
            "I am bringing air support. Stay clear of it."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Air support has hit the tank."
          ],
          [
            "CABOOSE",
            "Sheila is not moving, and I cannot get out."
          ],
          [
            "GRIF",
            "At least the tank has stopped chasing us."
          ]
        ],
        "events": [
          [
            2,
            "airstrike"
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
      "TEX",
      "LOPEZ"
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
            "Command, Church is dead. We need reinforcements."
          ],
          [
            "VIC",
            "Your reinforcement will be a freelancer called Tex."
          ],
          [
            "TUCKER",
            "A mercenary? All right. Send the freelancer."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      },
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
            "Church? You were killed by the tank."
          ],
          [
            "CHURCH",
            "I know. I seem to have come back without my body."
          ],
          [
            "CABOOSE",
            "I did not mean to shoot you."
          ],
          [
            "CHURCH",
            "We will discuss that after the other problem."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "Do not trust Tex just because Command sent a reinforcement."
          ],
          [
            "TUCKER",
            "Why?"
          ],
          [
            "CHURCH",
            "I fought alongside Tex at Sidewinder. My squad was wiped out."
          ],
          [
            "TUCKER",
            "And nobody thought to mention that before I called Command?"
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "TEX",
            "I am the freelancer Command sent. Where are the Reds?"
          ],
          [
            "TUCKER",
            "Their base is across the canyon."
          ],
          [
            "CHURCH",
            "Tucker, keep the rookie out of the way."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "Grif, explain what happened to our Warthog."
          ],
          [
            "GRIF",
            "The tank shot it while Simmons and I were getting away."
          ],
          [
            "SIMMONS",
            "Lopez is repairing the damage."
          ],
          [
            "SARGE",
            "Then let Lopez work. We still have an enemy base to deal with."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Tex crosses to Red Base to retrieve the Blue flag. The Reds are unprepared for the attack."
          ]
        ],
        "targets": [
          "GRIF",
          "SIMMONS"
        ],
        "dialogueStyle": "adapted"
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
            "There is a grenade stuck to my head!"
          ],
          [
            "SIMMONS",
            "Get away from him!"
          ],
          [
            "NARRATOR",
            "The grenade injures Donut. Tex also puts Grif and Simmons out of the fight."
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
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Tex retrieves the Blue flag inside Red Base. Sarge and Lopez are waiting."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Lopez, we have the freelancer. Keep the prisoner here."
          ],
          [
            "TEX",
            "You caught me while I was retrieving the flag."
          ],
          [
            "SARGE",
            "And now you are staying at Red Base."
          ]
        ],
        "events": [
          [
            2,
            "texCaptured"
          ]
        ],
        "player": "SARGE",
        "dialogueStyle": "adapted"
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
            "Donut needs medical treatment at headquarters."
          ],
          [
            "SARGE",
            "Prepare him for the airlift."
          ],
          [
            "GRIF",
            "Command is taking the rookie out of the canyon."
          ]
        ],
        "events": [
          [
            3,
            "evacuateDonut"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Tex is my former girlfriend."
          ],
          [
            "TUCKER",
            "That is a fairly important detail to leave out."
          ],
          [
            "CHURCH",
            "It does not change the fact that the Reds have captured her."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "Tex has an aggressive AI in her armor. I need to get her out of Red Base."
          ],
          [
            "TUCKER",
            "So what is the rescue plan?"
          ],
          [
            "CHURCH",
            "You and Caboose create a distraction. I can get inside without using the door."
          ],
          [
            "CABOOSE",
            "We can pretend to attack them."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "Our assignment is to guard the prisoner."
          ],
          [
            "GRIF",
            "Then guard her. I am standing right here."
          ],
          [
            "TEX",
            "You two have been talking instead of paying attention."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "Go through the teleporter. It will darken your armor, and the Reds may mistake you for more freelancers."
          ],
          [
            "TUCKER",
            "We distract them while you rescue Tex."
          ],
          [
            "CABOOSE",
            "This time I will help Church properly."
          ]
        ],
        "events": [
          [
            2,
            "blackDisguise"
          ]
        ],
        "dialogueStyle": "adapted"
      },
      {
        "kind": "possess",
        "title": "Help ghost Church reach and possess Sarge",
        "who": "SARGE",
        "dialogue": [
          [
            "CHURCH",
            "If I enter Sarge, I can use his body to give the order to release Tex."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Simmons, let the prisoner go. That is an order."
          ],
          [
            "SIMMONS",
            "If you say so, sir."
          ],
          [
            "CABOOSE",
            "Sarge is right there. I can shoot him to make up for shooting Church."
          ],
          [
            "TUCKER",
            "Caboose, Church is inside him!"
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
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
  },
  {
    "id": 15,
    "title": "THE WRONG KIND OF FIRST AID",
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
            "Where are we? Why is a Blue here?"
          ],
          [
            "CHURCH",
            "Apparently we are both dead. Your team is still down there."
          ],
          [
            "SARGE",
            "I can hear Grif. That does not make this feel like a reward."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Grif attempts CPR while the others try to revive Sarge."
          ]
        ],
        "player": "GRIF",
        "dialogueStyle": "adapted"
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
            "Grif brought you back, sir. He used CPR."
          ],
          [
            "SARGE",
            "CPR? After I was shot in the head?"
          ],
          [
            "GRIF",
            "You are breathing again, are you not?"
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "I am back from headquarters. They gave me replacement armor."
          ],
          [
            "GRIF",
            "Your armor is pink."
          ],
          [
            "DONUT",
            "It is a light shade of red. I also brought the speech unit for Lopez."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
        ],
        "dialogue": [
          [
            "NARRATOR",
            "Donut brought a speech unit so Lopez can finally talk."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Ground yourself before installing that card, sir. Static can damage it."
          ],
          [
            "SARGE",
            "I know how to install a speech unit."
          ],
          [
            "LOPEZ",
            "La tarjeta está dañada. Solo puedo hablar español."
          ],
          [
            "GRIF",
            "None of us can understand him."
          ]
        ],
        "events": [
          [
            2,
            "voiceCardSpark"
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "We rescued you. The least you can do is help fix our tank."
          ],
          [
            "TEX",
            "I will repair Sheila. Keep the rookie away from the controls."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "My body is still on the ridge. Nobody buried it?"
          ],
          [
            "TUCKER",
            "We had the freelancer and the tank to worry about."
          ],
          [
            "CHURCH",
            "That does not explain leaving my body out here."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
            "Estoy intentando explicar lo que pasó."
          ],
          [
            "SARGE",
            "Lopez, speak so the rest of us can understand."
          ],
          [
            "SIMMONS",
            "The damaged card is the problem, sir."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "If Tex destroys the Reds, she will leave. I need her to stay long enough to remove the AI."
          ],
          [
            "TUCKER",
            "You are going to warn the enemy about our own freelancer?"
          ],
          [
            "CHURCH",
            "That is the only way to keep her here."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
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
        "dialogue": [
          [
            "NARRATOR",
            "Church crosses toward Red Base to warn the Reds before Tex attacks."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "The Reds have someone in pink armor. Church went over there to warn them."
          ],
          [
            "TEX",
            "Church is warning the Reds about me?"
          ],
          [
            "TUCKER",
            "Caboose, you were not meant to tell her that."
          ]
        ],
        "events": [],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
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
            "Tex viene con el tanque. Va a atacar la base."
          ],
          [
            "SARGE",
            "Lopez, I cannot understand what you are saying."
          ],
          [
            "NARRATOR",
            "Church has entered Lopez, but the robot can still only speak Spanish. The warning fails."
          ]
        ],
        "events": [
          [
            1,
            "possessLopez"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Tex and Sheila begin their attack on Red Base."
          ]
        ],
        "dialogueStyle": "adapted"
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
            "Tex put a grenade on my head. This one is going back across the canyon."
          ]
        ],
        "target": {
          "x": 2228,
          "y": 490
        },
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Donut’s grenade disables Sheila. Church reaches the dying Tex while still inside Lopez."
          ],
          [
            "TEX",
            "Church, the AI is gone. Thank you."
          ],
          [
            "LOPEZ",
            "Tex, no te vayas."
          ]
        ],
        "events": [
          [
            2,
            "texDies"
          ]
        ],
        "dialogueStyle": "adapted"
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
            "NARRATOR",
            "Nearby, Caboose answers in an unfamiliar, menacing voice."
          ],
          [
            "CABOOSE",
            "My name is O’Malley."
          ]
        ],
        "events": [
          [
            1,
            "aiEscape"
          ]
        ],
        "dialogueStyle": "adapted"
      }
    ],
    "dialogueStyle": "adapted"
  }
];
