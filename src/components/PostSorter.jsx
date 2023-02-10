import BlogPostPreview from "./BlogPostPreview";
import { useState } from "react";
function PostSorter({ allPosts }) {
  const [currentTag, setcurrentTag] = useState("all");
  allPosts = allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() -
      new Date(a.frontmatter.publishDate).valueOf()
  );
  const sortedPosts = allPosts.filter((p) => p.frontmatter.tag === currentTag);
  return (
    <>
      <div className="tabs">
        <a onClick={() => setcurrentTag("all")} className="tab">
          all
        </a>
        {allPosts.map(({ frontmatter }) => (
          <a onClick={() => setcurrentTag(frontmatter.tag)} className="tab">
            {frontmatter.tag}
          </a>
        ))}
      </div>
      {currentTag === "all"
        ? allPosts.map((p) => <BlogPostPreview post={p} />)
        : sortedPosts.map((p) => <BlogPostPreview post={p} />)}
    </>
  );
}

export default PostSorter;
