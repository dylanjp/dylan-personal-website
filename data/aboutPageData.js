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
        content: "Hi, I’m Dylan. I live in Utah with my wife, Kate, and our two kids. By day, I’m a full-stack developer, working on everything from backend systems to frontend experiences. I love solving problems, writing code, and occasionally solving stubborn bugs.  In my spare time, I run my own indie game studio, where I’m developing Project Swordbreak—a 3D action-adventure Zelda-like built in Unreal Engine 5. It’s a passion project that lets me bring my love for game design, programming, and world-building to life. When I’m not coding, I love building computers, reading fantasy novels, and playing games—especially Zelda, Super Smash Bros, and Pokémon.",
    },
    {
        id: "pokemon-team",
        //title: "Pokemon Team",
        type: "list",
        content: ["Charizard.png", "Dragonite.png", "Jolteon.png", "Latias.png", "Arcaine.png", "Gyarados.png"],
    },
    {
        id: "step-counter",
        title: "2025 STEP COUNTER:",
        type: "counter",
        content: "1,734,986",
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
            characters: ["Zelda", "CaptainFalcon", "KingKRool", "Byleth", "Link"]
        }
    },
    {
        id: "current-games",
        title: `WHAT I'M PLAYING (${new Date().getFullYear()})`,
        type: "image",
        imageSrc: "/images/gameYear.png"
    },
    {
        id: "current-books",
        title: `WHAT I'M READING (${new Date().getFullYear()})`,
        type: "image",
        imageSrc: "/images/bookYear.png"
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
            "excel.svg"
        ]
    },
];
