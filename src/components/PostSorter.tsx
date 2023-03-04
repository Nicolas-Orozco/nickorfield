import BlogPostPreview from "./BlogPostPreview";
import useSessionStorage from "../hooks/useSessionStorage";
export interface PostsType {
  queryPosts: Array<any>;
}
function PostSorter({ queryPosts }: PostsType) {
  const [currentTag, setcurrentTag] = useSessionStorage("currentTag", "all");
  const sortedPosts = queryPosts
    .filter((p) => p.frontmatter.tag === currentTag)
    .map((p, index) => <BlogPostPreview post={p} key={index} />);
  return (
    <>
      <div
        className="tabs tabs-boxed mt-4 mb-8 [&>*]:border-r-2 [&>*]:border-base-content
"
      >
        <span
          onClick={() => setcurrentTag("all")}
          className={`${
            (currentTag === "all" || currentTag === undefined) && "tab-active"
          } tab tab-lg`}
        >
          all
        </span>

        {
          // Filter for duplicate tags and map for links
          [...new Set(queryPosts.map((p) => p.frontmatter.tag))].map(
            (tag: string, index) => (
              <span
                onClick={() => setcurrentTag(tag)}
                className={`${
                  (currentTag === tag || currentTag === undefined) &&
                  "tab-active"
                } tab tab-lg`}
                key={index}
              >
                {tag}
              </span>
            )
          )
        }
      </div>
      {currentTag === "all" || currentTag === undefined
        ? queryPosts.map((p) => <BlogPostPreview post={p} key={p.url} />)
        : sortedPosts}
    </>
  );
}

export default PostSorter;
