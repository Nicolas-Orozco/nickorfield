import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as addAttribute, m as maybeRenderHead, e as renderComponent, f as renderSlot, g as createVNode, F as Fragment } from '../astro.308a7785.mjs';
import 'html-escaper';
/* empty css                                     *//* empty css                           *//* empty css                           */
const $$Astro$7 = createAstro();
const $$AdminDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AdminDashboard;
  return renderTemplate`<html lang="en">
  <head>
    <title>Content Manager</title>
    <meta name="description" content="Admin dashboard for managing website content">
    
    
  ${renderHead($$result)}</head>
  <body></body></html>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/node_modules/.pnpm/astro-netlify-cms@0.5.2_astro@2.0.6/node_modules/astro-netlify-cms/admin-dashboard.astro");

const $$file$1 = "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/node_modules/.pnpm/astro-netlify-cms@0.5.2_astro@2.0.6/node_modules/astro-netlify-cms/admin-dashboard.astro";
const $$url$1 = undefined;

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdminDashboard,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, permalink } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(permalink, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image" content="https://astro.build/social.png?v=1">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(permalink, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image" content="https://astro.build/social.png?v=1">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap">`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/components/BaseHead.astro");

const SITE = {
  title: "Astro Blog with Netlify CMS"
};

const $$Astro$5 = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  return renderTemplate`${maybeRenderHead($$result)}<header class="wrapper astro-ITMXXAHK">
	<article class="astro-ITMXXAHK">
		<h1 class="astro-ITMXXAHK">
			<a href="/" class="astro-ITMXXAHK">
				<svg class="logo astro-ITMXXAHK" width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
					<style>
						#flame {
							fill: #ff5d01;
						}
						#a {
							fill: #000014;
						}
					</style>
					<title>Logo</title>
					<path id="a" fill-rule="evenodd" clip-rule="evenodd" d="M163.008 18.929c1.944 2.413 2.935 5.67 4.917 12.181l43.309 142.27a180.277 180.277 0 00-51.778-17.53l-28.198-95.29a3.67 3.67 0 00-7.042.01l-27.857 95.232a180.225 180.225 0 00-52.01 17.557l43.52-142.281c1.99-6.502 2.983-9.752 4.927-12.16a15.999 15.999 0 016.484-4.798c2.872-1.154 6.271-1.154 13.07-1.154h31.085c6.807 0 10.211 0 13.086 1.157a16.004 16.004 0 016.487 4.806z" class="astro-ITMXXAHK"></path>
					<path id="flame" fill-rule="evenodd" clip-rule="evenodd" d="M168.19 180.151c-7.139 6.105-21.39 10.268-37.804 10.268-20.147 0-37.033-6.272-41.513-14.707-1.602 4.835-1.961 10.367-1.961 13.902 0 0-1.056 17.355 11.015 29.426 0-6.268 5.081-11.349 11.349-11.349 10.743 0 10.731 9.373 10.721 16.977v.679c0 11.542 7.054 21.436 17.086 25.606a23.27 23.27 0 01-2.339-10.2c0-11.008 6.463-15.107 13.974-19.87 5.976-3.79 12.616-8.001 17.192-16.449a31.024 31.024 0 003.743-14.82c0-3.299-.513-6.479-1.463-9.463z" class="astro-ITMXXAHK"></path>
				</svg>
				<span class="astro-ITMXXAHK">${SITE.title}</span>
			</a>
		</h1>
	</article>
</header>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/components/BlogHeader.astro");

const $$Astro$4 = createAstro();
const $$BlogPostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogPostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<article class="post-preview astro-MOCBI3KA">
	<header class="astro-MOCBI3KA">
		<p class="publish-date astro-MOCBI3KA">${post.frontmatter.publishDate}</p>
		<a${addAttribute(post.url, "href")} class="astro-MOCBI3KA"><h1 class="title astro-MOCBI3KA">${post.frontmatter.title}</h1></a>
	</header>
	<p class="astro-MOCBI3KA">${post.frontmatter.description}</p>
	<a${addAttribute(post.url, "href")} class="astro-MOCBI3KA">Read more</a>
</article>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/components/BlogPostPreview.astro");

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  let { title } = SITE;
  let description = "The perfect starter for your perfect blog.";
  let permalink = "https://example.com/";
  let allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/index.md": () => Promise.resolve().then(() => _page2)}), () => "./posts/*.md");
  allPosts = allPosts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf());
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "permalink": permalink, "class": "astro-J7PV25F6" })}

		
	${renderHead($$result)}</head>

	<body class="astro-J7PV25F6">
		${renderComponent($$result, "BlogHeader", $$BlogHeader, { "class": "astro-J7PV25F6" })}
		<div class="wrapper astro-J7PV25F6">
			<main class="content astro-J7PV25F6">
				<section class="intro astro-J7PV25F6">
					<h1 class="latest astro-J7PV25F6">${title}</h1>
					<p class="astro-J7PV25F6">${description}</p>
				</section>
				<section aria-label="Blog post list" class="astro-J7PV25F6">
					${allPosts.map((p) => renderTemplate`${renderComponent($$result, "BlogPostPreview", $$BlogPostPreview, { "post": p, "class": "astro-J7PV25F6" })}`)}
				</section>
			</main>
			<footer class="astro-J7PV25F6">
			</footer>
		</div>
	</body></html>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/pages/index.astro");

const $$file = "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/pages/index.astro";
const $$url = "";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Author;
  const { name, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="author astro-2RI7I3M6">
	<p class="astro-2RI7I3M6"><a${addAttribute(href, "href")} class="astro-2RI7I3M6">${name}</a></p>
</div>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/components/Author.astro");

const $$Astro$1 = createAstro();
const $$BlogPost$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost$1;
  const { title, author, authorURL, publishDate, heroImage, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="layout astro-XJ2UYZ6M">
	<article class="content astro-XJ2UYZ6M">
		<div class="astro-XJ2UYZ6M">
			<header class="astro-XJ2UYZ6M">
				${heroImage && renderTemplate`<img width="720" height="420" class="hero-image astro-XJ2UYZ6M" loading="lazy"${addAttribute(heroImage, "src")}${addAttribute(alt, "alt")}>`}
				<p class="publish-date astro-XJ2UYZ6M">${publishDate}</p>
				<h1 class="title astro-XJ2UYZ6M">${title}</h1>
				${renderComponent($$result, "Author", $$Author, { "name": author, "href": authorURL, "class": "astro-XJ2UYZ6M" })}
			</header>
			<main class="astro-XJ2UYZ6M">
				${renderSlot($$result, $$slots["default"])}
			</main>
		</div>
	</article>
</div>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/components/BlogPost.astro");

const $$Astro = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { content } = Astro2.props;
  const { title, description, publishDate, author, authorURL, heroImage, permalink, alt } = content;
  return renderTemplate`<html${addAttribute(content.lang || "en", "lang")}>
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "permalink": permalink })}
	${renderHead($$result)}</head>

	<body>
		${renderComponent($$result, "BlogHeader", $$BlogHeader, {})}
		<div class="wrapper">
			${renderComponent($$result, "BlogPost", $$BlogPost$1, { "title": title, "author": author, "authorURL": authorURL, "heroImage": heroImage, "publishDate": publishDate, "alt": alt }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}
		</div>
	</body></html>`;
}, "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/layouts/BlogPost.astro");

const html = "<p><img src=\"/assets/blog/header.png\" alt=\"Astro + Netlify CMS logos\"></p>\n<p><a href=\"https://www.netlifycms.org/\">Netlify CMS</a> is an open-source, Git-based content management system. It provides a single-page app for editing content and can publish that content by committing it to a hosted Git repo (for example on GitHub or GitLab).</p>\n<p>Adding Netlify CMS to an <a href=\"https://astro.build/\">Astro</a> site would usually involve creating a number of files in different parts of your project directory and then keeping all those moving parts in sync. With the <a href=\"https://github.com/delucis/astro-netlify-cms/\"><code>astro-netlify-cms</code></a> integration, you configure the integration in your <code>astro.config.mjs</code> file and the integration takes care of the rest.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> { defineConfig } </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'astro/config'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> NetlifyCMS </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">'astro-netlify-cms'</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">export</span><span style=\"color: #FFA657\"> </span><span style=\"color: #FF7B72\">default</span><span style=\"color: #FFA657\"> </span><span style=\"color: #D2A8FF\">defineConfig</span><span style=\"color: #FFA657\">({</span></span>\n<span class=\"line\"><span style=\"color: #FFA657\">  </span><span style=\"color: #C9D1D9\">integrations: [</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #D2A8FF\">NetlifyCMS</span><span style=\"color: #C9D1D9\">({</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      config: {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        backend: {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          name: </span><span style=\"color: #A5D6FF\">'git-gateway'</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          branch: </span><span style=\"color: #A5D6FF\">'main'</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        },</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        collections: [</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">          </span><span style=\"color: #8B949E\">// Content collections</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">        ],</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">      },</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    }),</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  ]</span><span style=\"color: #FFA657\">,</span></span>\n<span class=\"line\"><span style=\"color: #FFA657\">})</span><span style=\"color: #C9D1D9\">;</span></span></code></pre>";

				const frontmatter = {"title":"Using Netlify CMS with an Astro site","publishDate":"16 May 2022","author":"Chris Swithinbank","authorURL":"https://twitter.com/swithinbank","description":"How to get started using Netlify CMS to manage your Astro site’s content","layout":"../../layouts/BlogPost.astro"};
				const file = "C:/Users/flabo/Documents/Projects_Container/WIP/Web_Dev/astro-projects/pozoesquinal/src/pages/posts/index.md";
				const url = "/posts";
				function rawContent() {
					return "![Astro + Netlify CMS logos](/assets/blog/header.png)\r\n\r\n[Netlify CMS](https://www.netlifycms.org/) is an open-source, Git-based content management system. It provides a single-page app for editing content and can publish that content by committing it to a hosted Git repo (for example on GitHub or GitLab).\r\n\r\nAdding Netlify CMS to an [Astro](https://astro.build/) site would usually involve creating a number of files in different parts of your project directory and then keeping all those moving parts in sync. With the [`astro-netlify-cms`](https://github.com/delucis/astro-netlify-cms/) integration, you configure the integration in your `astro.config.mjs` file and the integration takes care of the rest.\r\n\r\n```javascript\r\nimport { defineConfig } from 'astro/config';\r\nimport NetlifyCMS from 'astro-netlify-cms';\r\n\r\nexport default defineConfig({\r\n  integrations: [\r\n    NetlifyCMS({\r\n      config: {\r\n        backend: {\r\n          name: 'git-gateway',\r\n          branch: 'main',\r\n        },\r\n        collections: [\r\n          // Content collections\r\n        ],\r\n      },\r\n    }),\r\n  ],\r\n});\r\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BlogPost, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
