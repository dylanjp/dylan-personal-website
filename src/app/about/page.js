"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { aboutPageData } from "@/data/aboutPageData";
import styles from "./about.module.css";

const pokeSprite = (dexId) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexId}.png`;

// PokeAPI's sprite repo lacks most gen 8+ item sprites — those come from Serebii instead
const ITEM_SPRITE_OVERRIDES = {
  "booster-energy": "https://www.serebii.net/itemdex/sprites/boosterenergy.png",
  "loaded-dice": "https://www.serebii.net/itemdex/sprites/loadeddice.png",
  "heavy-duty-boots":
    "https://www.serebii.net/itemdex/sprites/heavy-dutyboots.png",
  "covert-cloak": "https://www.serebii.net/itemdex/sprites/covertcloak.png",
  "clear-amulet": "https://www.serebii.net/itemdex/sprites/clearamulet.png",
  "throat-spray": "https://www.serebii.net/itemdex/sprites/throatspray.png",
  "ability-shield": "https://www.serebii.net/itemdex/sprites/abilityshield.png",
  "mirror-herb": "https://www.serebii.net/itemdex/sprites/mirrorherb.png",
  "punching-glove": "https://www.serebii.net/itemdex/sprites/punchingglove.png",
  staraptite: "https://www.serebii.net/itemdex/sprites/staraptite.png",
};

const itemSprite = (slug) =>
  ITEM_SPRITE_OVERRIDES[slug] ||
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${slug}.png`;

export default function AboutPage() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  // 1. MOVED UP: Define this BEFORE useState so we can use it for initialization
  const tileAnimations = {
    "profile-picture": { delay: 50, type: "fade-zoom-border" },
    "about-me": { delay: 150, type: "fade-zoom-border" },
    "pokemon-team": { delay: 300, type: "fade-zoom" },
    "step-counter": { delay: 450, type: "fade-zoom-border" },
    "smash-stats": { delay: 600, type: "fade-zoom-border" },
    "current-games": { delay: 750, type: "fade-zoom-border" },
    "current-books": { delay: 900, type: "fade-zoom-border" },
    "favorite-software": { delay: 1050, type: "fade-zoom-border" },
    workstation: { delay: 1200, type: "fade-zoom-border" },
    "master-rank-teams": { delay: 1350, type: "fade-zoom-border" },
    "my-car": { delay: 1500, type: "fade-zoom-border" },
    "favorite-books": { delay: 1650, type: "fade-zoom-border" },
  };

  // 2. FIXED STATE: Initialize with all keys immediately
  const [animationState, setAnimationState] = useState({
    isLoaded: false,
    animatingTiles: new Set(Object.keys(tileAnimations)),
  });

  const animationConfig = {
    staggerDelay: 150,
    fadeDuration: 600,
    zoomDuration: 500,
    borderDuration: 800,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  // 3. CLEANED EFFECT: Removed the initial "setAnimationState" reset
  useEffect(() => {
    const allTileIds = Object.keys(tileAnimations);

    // Trigger staggered animations with proper timing
    allTileIds.forEach((tileId) => {
      const tileConfig = tileAnimations[tileId];

      // Start the animation after the stagger delay
      setTimeout(() => {
        setAnimationState((prevState) => {
          const newAnimatingTiles = new Set(prevState.animatingTiles);
          newAnimatingTiles.delete(tileId);
          return {
            isLoaded: newAnimatingTiles.size === 0,
            animatingTiles: newAnimatingTiles,
          };
        });
      }, tileConfig.delay);
    });
  }, []); // Dependency array remains empty

  // ... (The rest of your code: getTileAnimationClasses, const extractions, and JSX return remain exactly the same) ...

  // Helper function to get animation classes for a tile
  const getTileAnimationClasses = (tileId) => {
    // ... logic remains same ...
    const isStillAnimating = animationState.animatingTiles.has(tileId);
    const tileConfig = tileAnimations[tileId];

    let classes = "";

    // Special slower animation for profile tile
    if (tileId === "profile-picture") {
      if (isStillAnimating) {
        classes = `${styles["profile-tile-enter"]}`;
      } else {
        classes = `${styles["profile-tile-enter-active"]}`;
      }
    } else {
      // Standard animation for other tiles
      if (isStillAnimating) {
        classes = `${styles["tile-enter"]}`;
      } else {
        classes = `${styles["tile-enter-active"]}`;
      }
    }

    // Add border draw animation classes for tiles that support borders
    if (tileConfig.type.includes("border")) {
      classes += ` ${styles["border-draw"]}`;

      // Add color-specific border classes
      if (tileId === "smash-stats") {
        classes += ` ${styles["border-red"]}`;
      } else if (tileId === "current-games") {
        classes += ` ${styles["border-green"]}`;
      } else if (tileId === "current-books") {
        classes += ` ${styles["border-purple"]}`;
      } else if (tileId === "workstation") {
        classes += ` ${styles["border-orange"]}`;
      } else if (tileId === "master-rank-teams") {
        classes += ` ${styles["border-magenta"]}`;
      } else if (tileId === "my-car") {
        classes += ` ${styles["border-red"]}`;
      } else if (tileId === "favorite-books") {
        classes += ` ${styles["border-green"]}`;
      } else {
        classes += ` ${styles["border-cyan"]}`;
      }
    }

    return classes;
  };

  // Extract all tiles
  const profilePictureTile = aboutPageData.find(
    (tile) => tile.id === "profile-picture",
  );
  const aboutMeTile = aboutPageData.find((tile) => tile.id === "about-me");
  const pokemonTeamTile = aboutPageData.find(
    (tile) => tile.id === "pokemon-team",
  );
  const stepCounterTile = aboutPageData.find(
    (tile) => tile.id === "step-counter",
  );
  const smashStatsTile = aboutPageData.find(
    (tile) => tile.id === "smash-stats",
  );
  const currentGamesTile = aboutPageData.find(
    (tile) => tile.id === "current-games",
  );
  const currentBooksTile = aboutPageData.find(
    (tile) => tile.id === "current-books",
  );
  const favoriteSoftwareTile = aboutPageData.find(
    (tile) => tile.id === "favorite-software",
  );
  const workstationTile = aboutPageData.find(
    (tile) => tile.id === "workstation",
  );
  const masterRankTile = aboutPageData.find(
    (tile) => tile.id === "master-rank-teams",
  );
  const myCarTile = aboutPageData.find((tile) => tile.id === "my-car");
  const favoriteBooksTile = aboutPageData.find(
    (tile) => tile.id === "favorite-books",
  );

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />

      <div className={styles.tilesContainer}>
        {/* Left Column */}
        <div className={styles.tileColumn}>
          <div
            className={`${styles.profileTile} ${getTileAnimationClasses("profile-picture")}`}
          >
            <h2>{profilePictureTile.title}</h2>
            <img
              src={profilePictureTile.imageSrc}
              alt={profilePictureTile.title}
              className={styles.profileImage}
            />
          </div>

          <div
            className={`${styles.stepTile} ${getTileAnimationClasses("step-counter")}`}
          >
            <h2>{stepCounterTile.title}</h2>
            <div className={styles.stepCounter}>
              {stepCounterTile.content}
              <span className={styles.stepLabel}>STEPS TAKEN</span>
            </div>
          </div>

          <div
            className={`${styles.stepTile} ${getTileAnimationClasses("favorite-software")}`}
          >
            <h2>{favoriteSoftwareTile.title}</h2>
            <div className={styles.stepCounter}>
              <div className={styles.smashCharacters}>
                {favoriteSoftwareTile.content.map((character, index) => (
                  <img
                    key={index}
                    src={`/${character.toLowerCase()}`}
                    alt={character}
                    className={styles.smashCharacter}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${styles.workstationTile} ${getTileAnimationClasses("workstation")}`}
          >
            <h2>{workstationTile.title}</h2>
            <div className={styles.specList}>
              {workstationTile.content.map((spec) => (
                <div key={spec.label} className={styles.specItem}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${styles.carTile} ${getTileAnimationClasses("my-car")}`}
          >
            <h2>{myCarTile.title}</h2>
            <span className={styles.carSubtitle}>{myCarTile.subtitle}</span>
            <div className={styles.carStage}>
              <img
                src={myCarTile.imageSrc}
                alt="Toyota 86"
                className={styles.carImage}
              />
              <div className={styles.carGlow}></div>
            </div>
          </div>

          <div
            className={`${styles.booksTile} ${getTileAnimationClasses("favorite-books")}`}
          >
            <h2>{favoriteBooksTile.title}</h2>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                dylan@library:~$ cat favorites.txt
              </div>
              {favoriteBooksTile.content.map((book, index) => (
                <div key={book} className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>&gt;</span>
                  <span className={styles.terminalTitle}>{book}</span>
                  <span
                    className={styles.rainbowStars}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  >
                    ★★★★★
                  </span>
                </div>
              ))}
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.cursor}></span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className={styles.tileColumn}>
          <div
            className={`${styles.aboutTile} ${getTileAnimationClasses("about-me")}`}
          >
            <h2>{aboutMeTile.title}</h2>
            <p>{aboutMeTile.content}</p>
          </div>

          <div
            className={`${styles.smashTile} ${getTileAnimationClasses("smash-stats")}`}
          >
            <h2>{smashStatsTile.title}</h2>
            <div className={styles.smashStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>GSP: </span>
                <span className={styles.statValue}>
                  {smashStatsTile.content.gsp}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>BATTLES: </span>
                <span className={styles.statValue}>
                  {smashStatsTile.content.battles}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>TOTAL KOs: </span>
                <span className={styles.statValue}>
                  {smashStatsTile.content.kos}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>ELITE SINCE: </span>
                <span className={styles.statValue}>
                  {smashStatsTile.content.stage}
                </span>
              </div>
            </div>
            <div className={styles.smashCharacters}>
              {smashStatsTile.content.characters.map((character, index) => (
                <img
                  key={index}
                  src={`/images/smash-${character.toLowerCase()}.png`}
                  alt={character}
                  className={styles.smashCharacter}
                />
              ))}
            </div>
          </div>

          <div
            className={`${styles.masterRankTile} ${getTileAnimationClasses("master-rank-teams")}`}
          >
            <h2>{masterRankTile.title}</h2>
            {masterRankTile.content.map((team) => (
              <div key={team.label} className={styles.teamSection}>
                <h3 className={styles.teamLabel}>{team.label}</h3>
                <div className={styles.teamGrid}>
                  {team.pokemon.map((p) => (
                    <div
                      key={p.name}
                      className={styles.pokemonSlot}
                      tabIndex={0}
                    >
                      <img
                        src={pokeSprite(p.dexId)}
                        alt={p.name}
                        className={styles.pokemonSprite}
                        loading="lazy"
                      />
                      <img
                        src={itemSprite(p.item)}
                        alt={p.item.replace(/-/g, " ")}
                        className={styles.itemSprite}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className={styles.moveTooltip}>
                        <span className={styles.tooltipName}>{p.name}</span>
                        {p.moves.map((move) => (
                          <span key={move} className={styles.tooltipMove}>
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.tileColumn}>
          <div
            className={`${styles.pokemonTile} ${getTileAnimationClasses("pokemon-team")}`}
          >
            <h2>{pokemonTeamTile.title}</h2>
            <div className={styles.pokemonGrid}>
              {pokemonTeamTile.content.map((pokemon, index) => (
                <img
                  key={index}
                  src={`/images/${pokemon}`}
                  alt={pokemon.replace(".png", "")}
                  className={styles.pokemonImage}
                />
              ))}
            </div>
          </div>

          <div
            className={`${styles.playingTile} ${getTileAnimationClasses("current-games")}`}
          >
            <h2>{currentGamesTile.title}</h2>
            {currentGamesTile.type === "game-grid" ? (
              <div
                className={
                  currentGamesTile.images.length === 1
                    ? styles.gameGridSingle
                    : styles.gameGrid
                }
              >
                {currentGamesTile.images.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt={`Game ${index + 1}`}
                    className={styles.gameImage}
                  />
                ))}
              </div>
            ) : (
              <img
                src={currentGamesTile.imageSrc}
                alt="Current Games"
                className={styles.mediaImage}
              />
            )}
          </div>

          <div
            className={`${styles.readingTile} ${getTileAnimationClasses("current-books")}`}
          >
            <h2>{currentBooksTile.title}</h2>
            {currentBooksTile.type === "game-grid" ? (
              <div
                className={
                  currentBooksTile.images.length === 1
                    ? styles.gameGridSingle
                    : styles.gameGrid
                }
              >
                {currentBooksTile.images.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt={`Book ${index + 1}`}
                    className={styles.gameImage}
                  />
                ))}
              </div>
            ) : (
              <img
                src={currentBooksTile.imageSrc}
                alt="Current Books"
                className={styles.mediaImage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
