import BlogPostPreview from "./BlogPostPreview";
import useSessionStorage from "../hooks/useSessionStorage";
function PostSorter({ allPosts }) {
  const [currentTag, setcurrentTag] = useSessionStorage("currentTag", "all");
  const sortedPosts = allPosts
    .filter((p) => p.frontmatter.tag === currentTag)
    .map((p) => <BlogPostPreview post={p} key={p.frontmatter.uuid} />);
  return (
    <>
      <div className="tabs tabs-boxed">
        <a
          onClick={() => setcurrentTag("all")}
          className={`${
            (currentTag === "all" || currentTag === undefined) && "tab-active"
          } tab`}
        >
          all
        </a>
        {allPosts.map(({ frontmatter }) => (
          <a
            onClick={() => setcurrentTag(frontmatter.tag)}
            className={`${currentTag === frontmatter.tag && "tab-active"} tab`}
            key={frontmatter.uuid}
          >
            {frontmatter.tag}
          </a>
        ))}
      </div>
      {currentTag === "all" || currentTag === undefined
        ? allPosts.map((p, index) => <BlogPostPreview post={p} key={index} />)
        : sortedPosts}
    </>
  );
}

export default PostSorter;
