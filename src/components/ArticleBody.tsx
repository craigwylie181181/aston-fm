import { Fragment } from 'react';

// Renders **bold** spans inside a line of text
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <Fragment key={i}>{part}</Fragment>
  );
}

/* Renders the small Markdown subset used by articles in src/content/insights */
export default function ArticleBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines[0].startsWith('### ')) return <h3 key={i}>{inline(lines[0].slice(4))}</h3>;
        if (lines[0].startsWith('## ')) return <h2 key={i}>{inline(lines[0].slice(3))}</h2>;
        if (lines.every(l => l.startsWith('- '))) {
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>;
        }
        return <p key={i}>{inline(lines.join(' '))}</p>;
      })}
    </>
  );
}
