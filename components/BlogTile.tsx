
import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogTile.module.css";

type Blog = {
	date?: string;
	id?: string;
	title: string;
	image?: string;
	description?: string;
	blogLocation?: string;
	tags?: string[];
};

interface Props {
	blog: Blog;
	onClick?: () => void;
	index?: number;
}

export default function BlogTile({ blog, onClick, index = 0 }: Props) {
	const { title, image, description, date, tags } = blog;

	return (
		<motion.article
			className={styles.tile}
			onClick={onClick}
			role={onClick ? "button" : undefined}
			initial={{ opacity: 0, y: 10, scale: 0.995 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
			whileHover={{ y: -6, scale: 1.005, boxShadow: "0 18px 60px rgba(0,200,255,0.12), inset 0 0 60px rgba(0,200,255,0.06)", borderColor: "rgba(0,200,255,0.6)" }}
			whileFocus={{ y: -6, scale: 1.005, boxShadow: "0 18px 60px rgba(0,200,255,0.12), inset 0 0 60px rgba(0,200,255,0.06)", borderColor: "rgba(0,200,255,0.6)" }}
			// set CSS var for CSS-only glow timing
			style={{ ["--anim-delay" as any]: `${index * 80}ms` } as React.CSSProperties}
		>
			<div className={styles.imageWrap} aria-hidden>
				{image ? (
					// Using a simple img tag to avoid Next/Image config complexity
					<img src={image} alt={title} className={styles.image} />
				) : (
					<div className={styles.imagePlaceholder}>No Image</div>
				)}
			</div>

			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.desc}>{description}</p>

						<div className={styles.bottomRow}>
							<div className={styles.date}>{date ?? blog.id ?? ""}</div>
							<div className={styles.tags}>
								{(tags || []).map((t) => (
									<span key={t} className={styles.tag}>
										#{t}
									</span>
								))}
							</div>
						</div>
			</div>
		</motion.article>
	);
}
