function BlogPostPreview({ post }) {
  return (
    <article className="post-preview">
      <header>
        <p className="publish-date">{post.frontmatter.publishDate}</p>
        <a className="no-underline" href={post.url}>
          <h1 className="title">{post.frontmatter.title}</h1>
        </a>
      </header>
      <p>{post.frontmatter.description}</p>
      <a href={post.url} className="no-underline">
        Read more
      </a>
    </article>
  );
}

export default BlogPostPreview;
