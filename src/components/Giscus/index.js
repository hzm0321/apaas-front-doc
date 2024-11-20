import { jsx as b } from "react/jsx-runtime.js";
import { useState as j, useEffect as w } from "react";
function G({ id: e, host: i, repo: r, repoId: o, category: u, categoryId: n, mapping: s, term: a, strict: f, reactionsEnabled: d, emitMetadata: m, inputPosition: c, theme: p, lang: l, loading: g }) {
  const [t, x] = j(!1);
  return w(() => {
    t || (import("./giscus-BNK3dBIH.js"), x(!0));
  }, []), t ? b("giscus-widget", { id: e, host: i, repo: r, repoid: o, category: u, categoryid: n, mapping: s, term: a, strict: f, reactionsenabled: d, emitmetadata: m, inputposition: c, theme: p, lang: l, loading: g }) : null;
}
export {
  G as default
};
