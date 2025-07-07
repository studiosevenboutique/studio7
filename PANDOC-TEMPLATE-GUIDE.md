# Pandoc Professional Template

## Create a custom template file

Create a file called `professional-template.yaml`:

```yaml
---
# Document metadata
title: "Your Project Title"
author: "Your Name"
date: \today
subject: "Project Documentation"
keywords: [documentation, project, technical]

# PDF styling
geometry: 
  - top=1in
  - bottom=1in
  - left=1in
  - right=1in
fontsize: 11pt
documentclass: article
fontfamily: charter
linestretch: 1.25
links-as-notes: true

# Table of contents
toc: true
toc-depth: 3
number-sections: true

# Code highlighting
highlight-style: github
code-block-font-size: \footnotesize

# Headers and footers
header-includes: |
  \usepackage{fancyhdr}
  \pagestyle{fancy}
  \fancyhead[LE,RO]{\thepage}
  \fancyhead[LO,RE]{Your Project Name}
  \fancyfoot[C]{}
---
```

Then use it with:
```bash
pandoc your-document.md -o output.pdf --defaults professional-template.yaml
```

## Markdown Structure Tips

Use this structure in your markdown for best results:

```markdown
# Main Title
**Date:** Month Day, Year  
**Project:** Project Name  
**Status:** Complete/In Progress

---

## Executive Summary
Brief overview...

## Section 1
### Subsection 1.1
Content...

### Subsection 1.2
Content...

## Section 2
More content...

---

*Report generated on [date]*
```
