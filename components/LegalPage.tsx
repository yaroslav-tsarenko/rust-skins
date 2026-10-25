import Link from "next/link";
import type { ReactNode } from "react";
import { POLICIES, type PolicyId } from "@/lib/legal/policies";

/**
 * Renders a policy from lib/legal/policies.ts. The bodies use a small
 * Markdown subset: ### headings, paragraphs (two trailing spaces = line
 * break), "- " lists, pipe tables, **bold** and [links](href).
 */
export function LegalPage({ id }: { id: PolicyId }) {
  const policy = POLICIES[id];
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <nav aria-label="Breadcrumb" className="mb-4 text-xs text-sage">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="px-1.5">/</span>
        <span className="text-parchment">{policy.title}</span>
      </nav>

      <header className="border-b border-hairline pb-6">
        <p className="engraved text-[10px] text-gold">Legal</p>
        <h1 className="mt-1 font-display text-3xl font-bold text-parchment sm:text-4xl">{policy.title}</h1>
        <p className="mt-2 text-xs text-sage/70">Last updated {policy.updated}</p>
      </header>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-sage">{renderBlocks(policy.body)}</div>
    </div>
  );
}

function renderBlocks(md: string): ReactNode[] {
  const lines = md.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const key = out.length;
    if (line.startsWith("### ")) {
      out.push(
        <h2 key={key} className="!mt-10 font-display text-lg font-semibold text-parchment first:!mt-0">
          {inline(line.slice(4))}
        </h2>
      );
      i++;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) items.push(lines[i++].slice(2));
      out.push(
        <ul key={key} className="list-disc space-y-1.5 pl-5">
          {items.map((it, j) => <li key={j}>{inline(it)}</li>)}
        </ul>
      );
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i++].replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
      }
      const [head, , ...body] = rows;
      out.push(
        <div key={key} className="overflow-x-auto rounded-lg border border-hairline">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-well/60 text-parchment">
              <tr>{head.map((c, j) => <th key={j} className="px-3 py-2 font-semibold">{inline(c)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, j) => (
                <tr key={j} className="border-t border-hairline align-top">
                  {r.map((c, k) => <td key={k} className="px-3 py-2">{inline(c)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && lines[i].trim() && !/^(### |- |\|)/.test(lines[i])) para.push(lines[i++]);
      out.push(
        <p key={key}>
          {para.map((p, j) => (
            <span key={j}>
              {inline(p.trimEnd())}
              {j < para.length - 1 && (p.endsWith("  ") ? <br /> : " ")}
            </span>
          ))}
        </p>
      );
    }
  }
  return out;
}

const INLINE = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = out.length;
    if (m[1] !== undefined) {
      out.push(<strong key={key} className="font-semibold text-parchment">{autolink(m[1])}</strong>);
    } else {
      const href = m[3];
      out.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className="text-teal hover:underline">{m[2]}</Link>
        ) : (
          <a key={key} href={href} className="text-teal hover:underline" rel="noopener noreferrer">{m[2]}</a>
        )
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Makes bold e-mail addresses and URLs clickable. */
function autolink(text: string): ReactNode {
  if (/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(text)) {
    return <a href={`mailto:${text}`} className="hover:underline">{text}</a>;
  }
  if (/^https?:\/\/\S+$/.test(text)) {
    return <a href={text} className="hover:underline" rel="noopener noreferrer">{text}</a>;
  }
  return text;
}
