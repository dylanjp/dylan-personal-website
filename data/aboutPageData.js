// /data/aboutPageData.js

export const aboutPageData = [
  {
    id: "profile-picture",
    //title: "Profile Picture",
    type: "image",
    imageSrc: "/images/profile.png",
  },
  {
    id: "about-me",
    title: "About Me",
    type: "text",
    content:
      "Hi, I’m Dylan! I live in Utah with my wife Kate and our two kids. By day I’m a full-stack developer, working on frontend experiences and backend systems. I love solving problems, writing code, and investigating techy mysteries. In my spare time, I run my own game studio, where I build adventure games. I love game development. When I’m not in an IDE, I love building computers, reading fantasy novels, lifting weights, playing basketball, or playing games like Zelda, Super Smash Bros, and Pokémon.",
  },
  {
    id: "pokemon-team",
    //title: "Pokemon Team",
    type: "list",
    content: [
      "Charizard.png",
      "Dragonite.png",
      "Jolteon.png",
      "Latias.png",
      "Arcaine.png",
      "Gyarados.png",
    ],
  },
  {
    id: "step-counter",
    title: "2026 STEP COUNTER:",
    type: "counter",
    content: "2,249,050",
  },
  {
    id: "smash-stats",
    title: "SMASH BROS ULTIMATE STATS",
    type: "stats",
    content: {
      gsp: "15,193,791",
      battles: "11,611",
      kos: "51,659",
      stage: "12/08/2018",
      characters: ["Zelda", "CaptainFalcon", "KingKRool", "Byleth", "Link"],
    },
  },
  {
    id: "current-games",
    title: `WHAT I'M PLAYING (${new Date().getFullYear()})`,
    type: "game-grid",
    images: [
      "/images/gameYear6.png",
      "/images/gameYear4.png",
      "/images/gameYear5.png",
      "/images/gameYear.png",
      "/images/gameYear2.png",
      "/images/gameYear3.png",
    ],
  },
  {
    id: "current-books",
    title: `WHAT I'M READING (${new Date().getFullYear()})`,
    type: "image",
    imageSrc: "/images/bookYear.png",
  },
  {
    id: "favorite-software",
    title: "FAVORITE SOFTWARE",
    type: "icons",
    content: [
      "home-assistant.svg",
      "unreal.svg",
      "obsidian.svg",
      "plex.svg",
      "excel.svg",
    ],
  },
  {
    id: "workstation",
    title: "MY WORKSTATION",
    type: "specs",
    content: [
      { label: "CPU + COOLER", value: "INTEL 13600k / Noctua NH-D15" },
      { label: "GPU", value: "NVIDIA RTX 4080 16GB" },
      { label: "MOTHERBOARD", value: "GIGABYTE Z790 ATX" },
      { label: "RAM", value: "64GB DDR5" },
      { label: "MAIN DRIVE", value: "Samsung 990 Pro 2TB NVMe" },
      { label: "CASE", value: "Cooler Master HAF 700 BERSERKER" },
    ],
  },
  {
    id: "master-rank-teams",
    title: "MASTER RANK TEAMS",
    type: "pokemon-teams",
    // dexId = national dex number, item = PokeAPI item slug; sprites load from the PokeAPI CDN
    content: [
      {
        label: "CHAMPIONS — REG M-2",
        pokemon: [
          {
            name: "Charizard",
            dexId: 10035,
            item: "charizardite-y",
            moves: ["Weather Ball", "Protect", "Dragon Pulse", "Heat Wave"],
          },
          {
            name: "Raichu",
            dexId: 26,
            item: "magnet",
            moves: ["Thunderbolt", "Fake Out", "Upper Hand", "Grass Knot"],
          },
          {
            name: "Sylveon",
            dexId: 700,
            item: "sitrus-berry",
            moves: [
              "Hyper Voice",
              "Hyper Beam",
              "Calm Mind",
              "Detect",
            ],
          },
          {
            name: "Arcanine",
            dexId: 59,
            item: "leftovers",
            moves: ["Will O Wisp", "Close Combat", "Morning Sun", "Flame Charge"],
          },
          {
            name: "Dragapult",
            dexId: 887,
            item: "focus-sash",
            moves: ["Draco Meteor", "Thunderbolt", "Shadow Ball", "Disable"],
          },
          {
            name: "Hisuian - Typholsion",
            dexId: 10233,
            item: "choice-scarf",
            moves: ["Eruption", "Shadow Ball", "Solar Beam", "Heat Wave"],
          },
        ],
      },
      {
        label: "CHAMPIONS — REG M-B - 1",
        pokemon: [
          {
            name: "Charizard",
            dexId: 10035,
            item: "charizardite-y",
            moves: ["Weather Ball", "Protect", "Dragon Pulse", "Heat Wave"],
          },
          {
            name: "Staraptor",
            dexId: 10308,
            item: "staraptite",
            moves: ["Brave Bird", "Close Combat", "Protect", "Roost"],
          },
          {
            name: "Hisuian - Typholsion",
            dexId: 10233,
            item: "choice-scarf",
            moves: ["Eruption", "Shadow Ball", "Solar Beam", "Heat Wave"],
          },
          {
            name: "Metagross",
            dexId: 376,
            item: "life-orb",
            moves: [
              "Explosion",
              "Bullet Punch",
              "Earthquake",
              "Protect",
            ],
          },
          {
            name: "Dragapult",
            dexId: 887,
            item: "focus-sash",
            moves: ["Draco Meteor", "Thunderbolt", "Shadow Ball", "Disable"],
          },
          {
            name: "Talonflame",
            dexId: 663,
            item: "sitrus-berry",
            moves: ["Duel Wing Beat", "Feather Dance", "Tailwind", "Quick Guard"],
          },
        ],
      },
            {
        label: "CHAMPIONS — REG M-B - 2",
        pokemon: [
          {
            name: "Charizard",
            dexId: 10035,
            item: "charizardite-y",
            moves: ["Weather Ball", "Protect", "Dragon Pulse", "Heat Wave"],
          },
          {
            name: "Staraptor",
            dexId: 10308,
            item: "staraptite",
            moves: ["Brave Bird", "Close Combat", "Protect", "Roost"],
          },
          {
            name: "Hisuian - Typholsion",
            dexId: 10233,
            item: "choice-scarf",
            moves: ["Eruption", "Shadow Ball", "Solar Beam", "Heat Wave"],
          },
          {
            name: "Garchomp",
            dexId: 445,
            item: "life-orb",
            moves: [
              "Rock Slide",
              "Dragon Claw",
              "Earthquake",
              "Protect",
            ],
          },
          {
            name: "Dragapult",
            dexId: 887,
            item: "focus-sash",
            moves: ["Draco Meteor", "Thunderbolt", "Shadow Ball", "Disable"],
          },
          {
            name: "Talonflame",
            dexId: 663,
            item: "sitrus-berry",
            moves: ["Duel Wing Beat", "Feather Dance", "Tailwind", "Quick Guard"],
          },
        ],
      },
    ],
  },
  // {
  //   id: "my-car",
  //   //title: "MY CAR",
  //   subtitle: "TOYOTA 86",
  //   type: "image",
  //   imageSrc: "/images/toyota86.png",
  // },
  {
    id: "favorite-books",
    title: "FAVORITE BOOKS/SERIES",
    type: "terminal-list",
    content: [
      "Mistborn",
      "The Stormlight Archive",
      "Harry Potter",
      "Essentialism",
      "Dungeon Crawler Carl",
      "The Figure in the Shadows",
    ],
  },
];
