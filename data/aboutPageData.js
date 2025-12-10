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
        content: "Hi, I’m Dylan! I live in Utah with my wife Kate and our two kids. By day I’m a full-stack developer, working on frontend experiences and backend systems. I love solving problems, writing code, and investigating techy mysteries. In my spare time, I run my own game studio, where I build adventure games. I love game development. When I’m not in an IDE, I love building computers, reading fantasy novels, lifting weights, playing basketball, or playing games like Zelda, Super Smash Bros, and Pokémon.",
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
        content: "3,344,582",
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
        type: "game-grid",
        images: [
            "/images/gameYear.png",
            "/images/gameYear2.png"
        ]
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
