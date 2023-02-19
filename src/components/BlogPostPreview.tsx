function BlogPostPreview({ post }) {
  // Split publish date string into day, month, and year for 0, 1, 2 respectively
  const publishDates = post.frontmatter.publishDate.split(" ");
  return (
    <article className="mb-12 flex items-start">
      <div className="text-center">
        <p className="text-5xl font-bold tracking-widest">{publishDates[0]}</p>
        <p className="text-lg">{`${publishDates[1]} ${publishDates[2]}`}</p>
      </div>
      <div className="ml-5 mt-1">
        <header>
          <a className="link-hover" href={post.url}>
            <h1 className="title">{post.frontmatter.title}</h1>
          </a>
        </header>
        <p>{post.frontmatter.description}</p>
        <a href={post.url} className="no-underline">
          Read more
        </a>
      </div>
    </article>
  );
}

export default BlogPostPreview;
