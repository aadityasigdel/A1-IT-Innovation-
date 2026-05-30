import CodeBlock from "./CodeBlock";

// Converts inline markdown (bold, inline-code, links) to HTML strings.
// Safe for our controlled blog content — no user-supplied HTML.
function processInline(text) {
  if (!text) return "";
  return (
    text
      // Inline code — process first so backtick content is not altered
      .replace(
        /`([^`\n]+)`/g,
        '<code class="bg-gray-100 text-indigo-700 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200">$1</code>'
      )
      // Bold
      .replace(
        /\*\*([^*\n]+)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>'
      )
      // External links
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 underline font-medium">$1</a>'
      )
      // Internal links (starts with /)
      .replace(
        /\[([^\]]+)\]\(\/([^)]*)\)/g,
        '<a href="/$2" class="text-indigo-600 hover:text-indigo-800 underline font-medium">$1</a>'
      )
  );
}

function renderTable(lines) {
  const rows = lines
    .filter((l) => !/^\|[-| :]+\|$/.test(l.trim())) // skip separator rows
    .map((l) =>
      l
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim())
    );

  if (rows.length === 0) return "";
  const [header, ...body] = rows;

  return `
    <div class="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            ${header
              .map(
                (h) =>
                  `<th class="px-5 py-3 text-left font-semibold whitespace-nowrap">${processInline(h)}</th>`
              )
              .join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          ${body
            .map(
              (row, i) => `
            <tr class="${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-indigo-50 transition-colors">
              ${row
                .map(
                  (cell) =>
                    `<td class="px-5 py-3 text-gray-700 leading-relaxed">${processInline(cell)}</td>`
                )
                .join("")}
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

// Converts a text-only segment (no code blocks) into an HTML string.
function renderTextSegment(text) {
  const lines = text.split("\n");
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // ── Tables: collect consecutive | lines ────────────────────────────
    if (trimmed.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      result.push(renderTable(tableLines));
      continue;
    }

    // ── Headings ────────────────────────────────────────────────────────
    if (line.startsWith("## ")) {
      result.push(
        `<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b-2 border-indigo-200">${processInline(line.substring(3))}</h2>`
      );
    } else if (line.startsWith("### ")) {
      result.push(
        `<h3 class="text-xl font-bold text-indigo-700 mt-8 mb-4">${processInline(line.substring(4))}</h3>`
      );
    } else if (line.startsWith("#### ")) {
      result.push(
        `<h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">${processInline(line.substring(5))}</h4>`
      );
    }

    // ── Blockquote ──────────────────────────────────────────────────────
    else if (line.startsWith("> ")) {
      result.push(
        `<blockquote class="border-l-4 border-indigo-400 bg-indigo-50 pl-4 py-3 my-4 rounded-r-lg text-gray-700 not-italic">${processInline(line.substring(2))}</blockquote>`
      );
    }

    // ── Checkbox list items ─────────────────────────────────────────────
    else if (line.startsWith("- [ ] ") || line.startsWith("- [x] ") || line.startsWith("- [X] ")) {
      const checked = !line.startsWith("- [ ] ");
      const content = line.substring(6);
      result.push(
        `<li class="ml-4 mb-2 flex items-start gap-2 text-gray-700 list-none">
          <input type="checkbox" ${checked ? "checked" : ""} disabled
            class="mt-1 w-4 h-4 rounded border-gray-400 accent-indigo-600 shrink-0" />
          <span>${processInline(content)}</span>
        </li>`
      );
    }

    // ── Unordered list item ─────────────────────────────────────────────
    else if (line.startsWith("- ")) {
      result.push(
        `<li class="ml-6 list-disc text-gray-700 mb-2 leading-relaxed">${processInline(line.substring(2))}</li>`
      );
    }

    // ── Ordered list item ───────────────────────────────────────────────
    else if (/^\d+\.\s/.test(line)) {
      result.push(
        `<li class="ml-6 list-decimal text-gray-700 mb-2 leading-relaxed">${processInline(line.replace(/^\d+\.\s/, ""))}</li>`
      );
    }

    // ── Horizontal rule ─────────────────────────────────────────────────
    else if (trimmed === "---") {
      result.push(`<hr class="my-10 border-t-2 border-gray-200" />`);
    }

    // ── Empty line ──────────────────────────────────────────────────────
    else if (trimmed === "") {
      result.push("");
    }

    // ── Default paragraph ───────────────────────────────────────────────
    else {
      result.push(
        `<p class="text-gray-700 mb-4 leading-relaxed">${processInline(line)}</p>`
      );
    }

    i++;
  }

  return result.join("");
}

/**
 * Renders blog post content stored as a markdown-like string.
 * Splits on ``` delimiters — even segments are text, odd are code blocks.
 */
export default function MarkdownRenderer({ content }) {
  const segments = content.split("```");

  return (
    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      {segments.map((segment, index) => {
        // Even index → text
        if (index % 2 === 0) {
          const html = renderTextSegment(segment);
          return html.trim() ? (
            <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
          ) : null;
        }

        // Odd index → code block
        // First line is the language identifier, rest is the code
        const firstNewline = segment.indexOf("\n");
        const language =
          firstNewline > -1 ? segment.substring(0, firstNewline).trim() : "";
        const code =
          firstNewline > -1
            ? segment.substring(firstNewline + 1).replace(/\n$/, "")
            : segment;

        return <CodeBlock key={index} language={language} code={code} />;
      })}
    </div>
  );
}
