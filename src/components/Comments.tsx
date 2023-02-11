import { useEffect, useRef } from "react";
function Comments() {
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("repo", "Nicolas-Orozco/pozo-comments");
    s.setAttribute("issue-term", "title");
    s.setAttribute("theme", "github-dark");
    s.setAttribute("crossorigin", "anonymous");
    s.src = "https://utteranc.es/client.js";
    s.async = true;
    divRef.current.parentNode.insertBefore(s, divRef.current);
  });
  return <div id="utterances" className="border-b-4 pb-8" ref={divRef}></div>;
}

export default Comments;
