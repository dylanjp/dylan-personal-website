import { promises as fs } from "fs"; // <-- FIX: Use fs/promises
import path from "path";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import styles from "./blogPost.module.css";

const postsDir = path.join(process.cwd(), "public", "blogs");

marked.setOptions({ breaks: true, gfm: true });

function slugify(text) {
    return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[/\\]+/g, "/")
        .split("/")
        .map((seg) =>
            seg
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-+|-+$/g, "")
        )
        .join("/");
}

function convertObsidianLinks(html) {
    return html.replace(/\[\[([\s\S]+?)\]\]/g, (match, inner) => {
        const target = inner.trim();
        if (!target) return match;
        const slug = slugify(target);
        return `<a href="/blog/${slug}">${escapeHtml(target)}</a>`;
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Force static so dynamic params work
export const dynamic = 'force-static';

// Server Component
export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const filePath = path.join(postsDir, `${slug}.md`);

    let content;
    try {
        // FIX: Use async readFile and a try...catch block
        content = await fs.readFile(filePath, "utf8");
    } catch (error) {
        // This will catch errors like "file not found"
        return <h1 style={{ padding: "2rem" }}>404 - Post Not Found</h1>;
    }

    const htmlContent = marked.parse(content);
    const finalHtml = convertObsidianLinks(htmlContent);

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <Background />
            <main className={styles.blogMain}>
                <article
                    className={styles.blogContent}
                    dangerouslySetInnerHTML={{ __html: finalHtml }}
                />
            </main>
        </div>
    );
}

// Pre-build static paths
export async function generateStaticParams() {
    try {
        // FIX: Use async readdir and a try...catch block
        const filenames = await fs.readdir(postsDir);
        return filenames
            .filter((file) => file.endsWith(".md"))
            .map((file) => ({
                slug: file.replace(/\.md$/, ""),
            }));
    } catch (error) {
        // If the directory doesn't exist, return empty array
        console.warn("Could not read blogs directory for generateStaticParams:", error.message);
        return [];
    }
}