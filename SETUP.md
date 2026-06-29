# Konect Website — Claude Code Setup Guide

## Prerequisites
- Claude Code CLI installed
- Node.js 18+ and npm/pnpm
- Git

---

## 1. Skills to Install (Run These First)

### Core Design Skills
```bash
# Official Anthropic frontend-design — makes Claude produce beautiful, non-generic UI
claude plugin add anthropic/frontend-design

# UI/UX Pro Max — 50+ design styles, 161 color palettes, 12 tech stacks
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill

# Refactoring UI — visual audit for hierarchy, spacing, shadows, color issues
npx skills add https://github.com/LovroPodobnik/refactoring-ui-skill

# Impeccable — anti-slop design language, 23 commands for polished output
/plugin marketplace add pbakaus/impeccable

# Theme Factory — curated professional color palettes and font pairings
npx skills add https://github.com/anthropics/skills --skill theme-factory
```

### SEO & Marketing Skills
```bash
# Corey Haines marketing suite — SEO audit, CRO, copywriting, analytics
npx skills add coreyhaines31/marketingskills

# Or install specific skills only:
npx skills add coreyhaines31/marketingskills --skill seo-audit page-cro copywriting programmatic-seo ai-seo
```

### Quality & Performance Skills
```bash
# Vercel Agent Skills — 100+ accessibility, performance, and UX rules
/plugin marketplace add vercel-labs/agent-skills

# UX Heuristics — Nielsen's 10 heuristics audit with severity scoring
# (part of wondelai skills collection)
npx skills add https://github.com/wondelai/skills --skill ux-heuristics
```

---

## 2. MCP Servers to Configure

Add these to your Claude Code settings (`.claude/settings.json` or global settings):

### Claude Preview (Built-in)
Already available — use `/run` or the preview tools to launch and test the site in a browser. Essential for verifying responsive design, animations, and interactions.

### Figma MCP (If client provides Figma designs)
```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/figma-mcp-server"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "<token>"
      }
    }
  }
}
```
Use when: Client provides Figma mockups to translate into code.

### Firecrawl MCP (For competitor research & scraping)
```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "<key>"
      }
    }
  }
}
```
Use when: You need to scrape competitor security company websites for content/structure research.

### Playwright MCP (For automated testing)
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/playwright-mcp-server"]
    }
  }
}
```
Use when: Automated browser testing — verify responsive layouts, click flows, form submissions across viewports.

### Vercel MCP (For deployment)
```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "vercel-mcp-server"],
      "env": {
        "VERCEL_API_TOKEN": "<token>"
      }
    }
  }
}
```
Use when: Deploying to Vercel, checking build logs, managing preview deployments.

---

## 3. Slash Commands Available After Setup

| Command | What It Does |
|---------|-------------|
| `/frontend-design` | Guided workflow for building components and pages with high design quality |
| `/design` | Quick design mode for UI components |
| `/ui` | Generate UI components with design system awareness |
| `/layout` | Create responsive layouts and page structures |
| `/seo-audit` | Run SEO analysis on the built pages |
| `/page-cro` | Conversion rate optimization analysis on any page |
| `/copywriting` | Generate marketing copy for pages |
| `/run` | Launch the dev server and preview in browser |
| `/verify` | Test that changes actually work in the real app |

---

## 4. Project Initialization

```bash
# Create Next.js project
npx create-next-app@latest konect-website --typescript --tailwind --app --src-dir

# Install dependencies
cd konect-website
npm install framer-motion lucide-react

# Copy the CLAUDE.md into the project
cp ../CLAUDE.md .

# Start Claude Code
claude

# First command to Claude:
# "Read CLAUDE.md and build the complete website. Start with the layout (Header, Footer),
# then the homepage with all sections, then service pages, then the projects/case studies
# page. Use /frontend-design for each major component. Test with /run after each page."
```

---

## 5. Recommended Workflow

### Phase 1: Foundation
1. Set up Next.js project structure matching the CLAUDE.md architecture
2. Configure Tailwind with the color palette from CLAUDE.md
3. Self-host fonts (Inter + Clash Display or Cabinet Grotesk)
4. Build layout components (Header, Footer, Container)
5. `/run` → verify base layout

### Phase 2: Homepage
1. `/frontend-design` → Build Hero section with animated stats
2. Build StatsBar with scroll-triggered counter animations
3. Build ServicesGrid with icon cards
4. Build featured ProjectCards (Rajasthani Sammelan, Raheja Imperia, Navjiwan)
5. Build WhyUs section with competitive advantages
6. Build CTASection
7. `/run` → verify full homepage at 375px, 768px, 1440px

### Phase 3: Service Pages
1. Build service page template component
2. Create all 8 service pages with unique content
3. `/seo-audit` each service page
4. `/run` → verify all service pages

### Phase 4: Case Studies
1. Build project/case study template
2. Create individual case study pages for top 5 projects
3. Build filterable project grid on /projects
4. `/run` → verify portfolio section

### Phase 5: Remaining Pages
1. About page with company timeline
2. AMC page (this is a sales page — treat it like a landing page)
3. Industries/verticals page
4. Contact page with form + map + WhatsApp

### Phase 6: Polish & Optimize
1. `/seo-audit` → fix any issues
2. `/page-cro` → optimize conversion paths
3. Lighthouse audit → hit 90+ performance, 95+ accessibility, 100 SEO
4. Test all responsive breakpoints
5. Verify all structured data with Google Rich Results Test
6. Cross-browser test (Chrome, Safari, Firefox)

---

## 6. Key Files Reference

```
konect-website/
├── CLAUDE.md              ← Master brief (this file's companion)
├── .claude/
│   └── settings.json      ← MCP server configs
├── src/
│   ├── app/
│   │   ├── layout.tsx     ← Root layout with Header/Footer
│   │   ├── page.tsx       ← Homepage
│   │   ├── about/
│   │   ├── services/
│   │   │   ├── page.tsx   ← Services hub
│   │   │   ├── cctv/
│   │   │   ├── access-control/
│   │   │   └── ... (8 service pages)
│   │   ├── projects/
│   │   │   ├── page.tsx   ← Portfolio grid
│   │   │   └── [slug]/
│   │   ├── industries/
│   │   ├── amc/
│   │   └── contact/
│   ├── components/        ← All reusable components
│   ├── lib/
│   │   └── projects.ts    ← Case study data
│   └── styles/
│       └── globals.css    ← Tailwind base + custom properties
├── public/
│   ├── images/            ← Project photos, logos
│   └── fonts/             ← Self-hosted fonts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Notes

- **Model:** Use Opus 4.8 for the build. It handles complex multi-file generation and design decisions better than Sonnet for a project of this scope.
- **Context:** The CLAUDE.md contains everything — company data, case studies, design direction, SEO keywords, component specs. Claude should reference it constantly.
- **Testing:** Use `/run` and `/verify` after EVERY major section. Don't build the whole site blind.
- **Images:** Use placeholder divs with aspect ratios initially. Real project photos can be dropped in later.
- **WhatsApp:** Indian B2B runs on WhatsApp. The floating button is non-negotiable.
