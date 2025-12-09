"use client";

import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { aboutPageData } from "@/data/aboutPageData";
import styles from "./about.module.css";

export default function AboutPage() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  // Extract all tiles
  const profilePictureTile = aboutPageData.find(tile => tile.id === "profile-picture");
  const aboutMeTile = aboutPageData.find(tile => tile.id === "about-me");
  const pokemonTeamTile = aboutPageData.find(tile => tile.id === "pokemon-team");
  const stepCounterTile = aboutPageData.find(tile => tile.id === "step-counter");
  const smashStatsTile = aboutPageData.find(tile => tile.id === "smash-stats");
  const currentGamesTile = aboutPageData.find(tile => tile.id === "current-games");
  const currentBooksTile = aboutPageData.find(tile => tile.id === "current-books");
  const favoriteSoftwareTile = aboutPageData.find(tile => tile.id === "favorite-software");

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />

      <div className={styles.tilesContainer}>
        {/* Left Column */}
        <div className={styles.tileColumn}>
          <div className={styles.profileTile}>
            <h2>{profilePictureTile.title}</h2>
            <img
              src={profilePictureTile.imageSrc}
              alt={profilePictureTile.title}
              className={styles.profileImage}
            />
          </div>

          <div className={styles.stepTile}>
            <h2>{stepCounterTile.title}</h2>
            <div className={styles.stepCounter}>
              {stepCounterTile.content}
              <span className={styles.stepLabel}>STEPS TAKEN</span>
            </div>
          </div>

          <div className={styles.stepTile}>
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

        </div>
        

        {/* Middle Column */}
        <div className={styles.tileColumn}>
          <div className={styles.aboutTile}>
            <h2>{aboutMeTile.title}</h2>
            <p>{aboutMeTile.content}</p>
          </div>

          <div className={styles.smashTile}>
            <h2>{smashStatsTile.title}</h2>
            <div className={styles.smashStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>GSP: </span>
                <span className={styles.statValue}>{smashStatsTile.content.gsp}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>BATTLES: </span>
                <span className={styles.statValue}>{smashStatsTile.content.battles}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>TOTAL KOs: </span>
                <span className={styles.statValue}>{smashStatsTile.content.kos}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>ELITE SINCE: </span>
                <span className={styles.statValue}>{smashStatsTile.content.stage}</span>
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
        </div>

        {/* Right Column */}
        <div className={styles.tileColumn}>
          <div className={styles.pokemonTile}>
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

          <div className={styles.playingTile}>
            <h2>{currentGamesTile.title}</h2>
            {currentGamesTile.type === "game-grid" ? (
              <div className={styles.gameGrid}>
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

          <div className={styles.readingTile}>
            <h2>{currentBooksTile.title}</h2>
            <img
              src={currentBooksTile.imageSrc}
              alt="Current Books"
              className={styles.mediaImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}