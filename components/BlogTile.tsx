
import React from "react";
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
}

export default function BlogTile({ blog, onClick }: Props) {
	const { title, image, description, date, tags } = blog;

	return (
		<article className={styles.tile} onClick={onClick} role={onClick ? "button" : undefined}>
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
		</article>
	);
}
