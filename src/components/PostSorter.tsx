import BlogPostPreview from "./BlogPostPreview";
import useSessionStorage from "../hooks/useSessionStorage";
function PostSorter({ allPosts }) {
  const [currentTag, setcurrentTag] = useSessionStorage("currentTag", "all");
  const sortedPosts = allPosts
    .filter((p) => p.frontmatter.tag === currentTag)
    .map((p, index) => <BlogPostPreview post={p} key={index} />);
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

        {
          //Filter for duplicate tags and map for links
          [...new Set(allPosts.map((p) => p.frontmatter.tag))].map(
            (tag: string, index) => (
              <a
                onClick={() => setcurrentTag(tag)}
                className={`${
                  (currentTag === tag || currentTag === undefined) &&
                  "tab-active"
                } tab tab-lg`}
                key={index}
              >
                {tag}
              </a>
            )
          )
        }
      </div>
      {currentTag === "all" || currentTag === undefined
        ? allPosts.map((p) => <BlogPostPreview post={p} key={p.url} />)
        : sortedPosts}
    </>
  );
}

export default PostSorter;
