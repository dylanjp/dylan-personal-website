"use client";

import { useEffect, useRef } from "react";
import styles from "./blogPost.module.css";

export default function BlogAnimator({ htmlContent }) {
    const articleRef = useRef(null);

    // Get the actual CSS module class names
    const decipheringClass = styles.deciphering || "deciphering";
    const decodedClass = styles.decoded || "decoded";

    useEffect(() => {
        const root = articleRef.current;
        if (!root) return;

        // A list to store all active timeouts and intervals
        const timers = [];

        // Start the main animation logic inside a timeout
        const startTimeout = setTimeout(() => {
            const CHARS = "!<>-_\\/[]{}-=+*^?#________";
            root.classList.add(decipheringClass);

            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
                acceptNode: function (node) {
                    if (
                        node.parentNode &&
                        ["IFRAME", "SCRIPT"].includes(node.parentNode.nodeName)
                    )
                        return NodeFilter.FILTER_REJECT;
                    return /\S/.test(node.nodeValue)
                        ? NodeFilter.FILTER_ACCEPT
                        : NodeFilter.FILTER_REJECT;
                },
            }, false);

            const textNodes = [];
            while (walker.nextNode()) textNodes.push(walker.currentNode);

            textNodes.forEach((node, index) => {
                const original = node.nodeValue;
                const len = original.length;
                const durationMs = Math.min(1200, 300 + len * 12);
                const frameMs = 25;
                const frames = Math.max(6, Math.floor(durationMs / frameMs));
                let frame = 0;
                const startDelay = index * 35;

                const runInterval = function () {
                    const interval = setInterval(() => {
                        frame++;
                        const revealCount = Math.floor((frame / frames) * original.length);
                        const out = original
                            .split("")
                            .map((ch, i) => {
                                if (ch === " " || ch === "\n" || ch === "\t") return ch;
                                if (i < revealCount) return ch;
                                return CHARS[Math.floor(Math.random() * CHARS.length)];
                            })
                            .join("");
                        node.nodeValue = out;
                        if (frame >= frames) {
                            node.nodeValue = original;
                            clearInterval(interval);
                        }
                    }, frameMs);
                    timers.push(interval); // Store interval for cleanup
                };
                timers.push(setTimeout(runInterval, startDelay)); // Store timeout for cleanup
            });

            const finalTimeout = setTimeout(() => {
                root.classList.remove(decipheringClass);
                root.classList.add(decodedClass);
            }, 2200 + textNodes.length * 20);
            timers.push(finalTimeout);
        }, 50); // Original 50ms delay

        timers.push(startTimeout);

        // **IMPORTANT: Cleanup function**
        // This runs if the user navigates away before the animation finishes.
        return () => {
            timers.forEach((timer) => {
                clearInterval(timer); // This works for both intervals and timeouts
            });
            // Ensure the content is in its final state if we unmount
            if (articleRef.current) {
                articleRef.current.classList.remove(decipheringClass);
                articleRef.current.classList.add(decodedClass);
            }
        };
    }, [htmlContent, decipheringClass, decodedClass]); // Re-run effect if blog content changes

    // This component now renders the article
    return (
        <article
            ref={articleRef}
            id="blogContent"
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}