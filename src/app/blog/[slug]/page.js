import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import styles from "./blogPost.module.css";
import BlogAnimator from "@/components/BlogAnimator";
import { notFound } from "next/navigation";

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
export const dynamic = "force-static";

// SERVER COMPONENT - reads markdown and renders HTML
export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const filePath = path.join(postsDir, `${slug}.md`);

    let content;
    try {
        content = await fs.readFile(filePath, "utf8");
    } catch (error) {
        // File doesn't exist → trigger app router not-found page
        notFound();
    }

    const htmlContent = marked.parse(content);
    const finalHtml = convertObsidianLinks(htmlContent);

    // 2. We no longer need the class name variables here

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <Background />
            <main className={styles.blogMain}>
                {/* 3. Use the BlogAnimator and pass the HTML to it */}
                <BlogAnimator htmlContent={finalHtml} />
            </main>

            {/* 4. The <script> tag is gone! */}
        </div>
    );
}
export async function generateStaticParams() {
  try {
    const filenames = await fs.readdir(postsDir);
    return filenames
      .filter(file => file.endsWith(".md"))
      .map(file => ({ slug: file.replace(/\.md$/, "") }));
  } catch {
    return [];
  }
}