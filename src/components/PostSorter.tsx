import BlogPostPreview from "./BlogPostPreview";
import useSessionStorage from "../hooks/useSessionStorage";
function PostSorter({ allPosts }) {
  const [currentTag, setcurrentTag] = useSessionStorage("currentTag", "all");
  const sortedPosts = allPosts
    .filter((p) => p.frontmatter.tag === currentTag)
    .map((p) => <BlogPostPreview post={p} key={p.frontmatter.uuid} />);
  return (
    <>
      <div
        className="tabs tabs-boxed mt-4 mb-8 [&>*]:border-r-2 [&>*]:border-base-content
"
      >
        <a
          onClick={() => setcurrentTag("all")}
          className={`${
            (currentTag === "all" || currentTag === undefined) && "tab-active"
          } tab tab-lg`}
        >
          all
        </a>
        <a
          onClick={() => setcurrentTag("blog")}
          className={`${
            (currentTag === "blog" || currentTag === undefined) && "tab-active"
          } tab tab-lg`}
        >
          blog
        </a>
        <a
          onClick={() => setcurrentTag("media")}
          className={`${
            (currentTag === "media" || currentTag === undefined) && "tab-active"
          } tab tab-lg`}
        >
          media
        </a>
        <a
          onClick={() => setcurrentTag("poetry")}
          className={`${
            (currentTag === "poetry" || currentTag === undefined) &&
            "tab-active"
          } tab tab-lg`}
        >
          poetry
        </a>
        <a
          onClick={() => setcurrentTag("prose")}
          className={`${
            (currentTag === "prose" || currentTag === undefined) && "tab-active"
          } tab tab-lg`}
        >
          prose
        </a>
      </div>
      {currentTag === "all" || currentTag === undefined
        ? allPosts.map((p) => <BlogPostPreview post={p} key={p.url} />)
        : sortedPosts}
    </>
  );
}

export default PostSorter;
