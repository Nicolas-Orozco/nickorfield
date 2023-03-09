export interface typePost {
  post: {
    url: string;
    frontmatter: {
      publishDate: string;
      title: string;
      description: string;
    };
  };
}
function BlogPostPreview({ post: { frontmatter, url } }: typePost) {
  // Split publish date string into day, month, and year for 0, 1, 2 respectively
  const publishDates = frontmatter.publishDate.split(" ");
  return (
    <article className="mb-14 flex items-start">
      <div className="text-center">
        <p className="text-5xl font-bold tracking-widest">{publishDates[0]}</p>
        <p className="text-lg">{`${publishDates[1]} ${publishDates[2]}`}</p>
      </div>
      <div className="ml-5 mt-1">
        <header>
          <a
            aria-label={frontmatter.description}
            className="link-hover"
            href={url}
          >
            <h1 className="title">{frontmatter.title}</h1>
            <p className="text-xl">{frontmatter.description}</p>
          </a>
        </header>
      </div>
    </article>
  );
}

export default BlogPostPreview;
