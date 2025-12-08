# Research Paper HTML Template

This is the complete HTML template for research papers. Copy this structure and customize for each paper.

## Complete HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Paper Title] - [Brief Description]</title>
    <style>
        @page {
            margin: 2cm;
        }
        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }
        h1 {
            color: #1a1a1a;
            font-size: 28px;
            margin-bottom: 10px;
            text-align: center;
            border-bottom: 2px solid #DC8850;
            padding-bottom: 15px;
        }
        h2 {
            color: #DC8850;
            font-size: 22px;
            margin-top: 35px;
            margin-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 8px;
        }
        h3 {
            color: #555;
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 12px;
            font-weight: 600;
        }
        .authors {
            text-align: center;
            font-style: italic;
            margin-bottom: 30px;
            color: #666;
        }
        .abstract {
            background: #f8f8f8;
            padding: 20px;
            border-left: 4px solid #DC8850;
            margin: 20px 0;
        }
        .key-finding {
            background: #fff8f0;
            padding: 15px;
            border-left: 4px solid #DC8850;
            margin: 20px 0;
        }
        .key-finding h3 {
            margin-top: 0;
            color: #DC8850;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #DC8850;
            color: white;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .metric {
            font-weight: bold;
            color: #DC8850;
        }
        .performance-improvement {
            color: #27ae60;
            font-weight: bold;
        }
        .performance-decline {
            color: #e74c3c;
            font-weight: bold;
        }
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        li {
            margin: 8px 0;
        }
        .methodology-box {
            background: #f0f8ff;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .conclusion-box {
            background: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            margin-top: 30px;
        }
        .badge {
            display: inline-block;
            padding: 4px 10px;
            background: #DC8850;
            color: white;
            border-radius: 3px;
            font-size: 12px;
            font-weight: bold;
            margin-right: 8px;
        }
        .badge-success {
            background: #27ae60;
        }
        .badge-warning {
            background: #f39c12;
        }
        .badge-danger {
            background: #e74c3c;
        }
        .formula {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            text-align: center;
            margin: 20px 0;
            overflow-x: auto;
        }
        .eli5-box {
            background: #e8f5e9;
            padding: 20px;
            border-left: 4px solid #4caf50;
            margin: 20px 0;
            font-size: 15px;
        }
        .eli5-box h3 {
            margin-top: 0;
            color: #4caf50;
        }
        .figure {
            margin: 30px 0;
            text-align: center;
        }
        .figure img {
            max-width: 100%;
            height: auto;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .figure-caption {
            font-style: italic;
            color: #666;
            margin-top: 10px;
            font-size: 14px;
        }
        .timeline-box {
            background: linear-gradient(to right, #f8f8f8, #fff);
            padding: 20px;
            border-left: 4px solid #DC8850;
            margin: 20px 0;
            position: relative;
        }
        .timeline-item {
            margin: 15px 0;
            padding-left: 30px;
            position: relative;
        }
        .timeline-item:before {
            content: "•";
            position: absolute;
            left: 10px;
            color: #DC8850;
            font-size: 20px;
        }
        .timeline-date {
            font-weight: bold;
            color: #DC8850;
        }
        .insight-box {
            background: #fffbf0;
            border: 2px solid #DC8850;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        .insight-box h3 {
            color: #DC8850;
            margin-top: 0;
        }
        .source-box {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .source-box a {
            color: #DC8850;
            text-decoration: none;
            font-weight: bold;
        }
        .source-box a:hover {
            text-decoration: underline;
        }
        .navigation {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: #f8f8f8;
            border-radius: 5px;
        }
        .navigation a {
            color: #DC8850;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }
        .navigation a:hover {
            text-decoration: underline;
        }
        p {
            margin: 15px 0;
            text-align: justify;
        }
    </style>
</head>
<body>
    <!-- NAVIGATION HEADER -->
    <div class="navigation">
        <a href="../index.html">← Home</a>
        <a href="../agent/index.html">Agent Reliability</a>
        <a href="../rag/index.html">RAG Patterns</a>
        <a href="../research-papers/index.html">Research Papers</a>
        <a href="https://join.maxpool.dev" target="_blank">Join Community →</a>
    </div>

    <!-- TITLE - Use <br> for subtitle -->
    <h1>[Main Title]<br>[Subtitle]</h1>

    <!-- AUTHORS -->
    <div class="authors">
        [Author Names], [Institution]<br>
        <em>[Month Year]</em>
    </div>

    <!-- EXECUTIVE SUMMARY -->
    <div class="abstract">
        <h2>Executive Summary</h2>
        <p>[2-3 paragraphs summarizing the paper. Include key metrics using <span class="performance-improvement">+24%</span> for improvements, <span class="metric">73%</span> for neutral metrics.]</p>
    </div>

    <!-- ELI5 BOX -->
    <div class="eli5-box">
        <h3>🎯 ELI5: [Concept Name]</h3>
        <p>[Simple analogy explaining the core concept in terms anyone can understand. Use real-world comparisons.]</p>
    </div>

    <!-- KEY FIGURE (place important figures early) -->
    <div class="figure">
        <img src="[FIGURE_URL]" alt="[Description]">
        <div class="figure-caption">Figure 1: [Caption describing what the figure shows]</div>
    </div>

    <!-- PART 1: Main Content -->
    <h2>Part 1: [Section Title]</h2>

    <p>[Content paragraphs with specific metrics and findings.]</p>

    <div class="key-finding">
        <h3>[Finding Title]</h3>
        <p>[Important discovery with highlighted metrics]</p>
        <ul>
            <li><strong>[Point 1]:</strong> Description with <span class="metric">specific value</span></li>
            <li><strong>[Point 2]:</strong> Description</li>
        </ul>
    </div>

    <h3>[Subsection Title]</h3>

    <p>[More content...]</p>

    <!-- METHODOLOGY BOX -->
    <div class="methodology-box">
        <h3>[Methodology Title]</h3>
        <ul>
            <li>[Method point 1]</li>
            <li>[Method point 2]</li>
            <li>[Method point 3]</li>
        </ul>
    </div>

    <!-- PART 2: Additional Content -->
    <h2>Part 2: [Section Title]</h2>

    <p>[Content...]</p>

    <!-- TABLE -->
    <table>
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data</td>
                <td><span class="performance-improvement">+24%</span></td>
                <td>Description</td>
            </tr>
            <tr>
                <td>Data</td>
                <td><span class="performance-decline">-15%</span></td>
                <td>Description</td>
            </tr>
        </tbody>
    </table>

    <!-- FORMULA (if applicable) -->
    <div class="formula">
        [Mathematical formula or code]<br>
        where [variable explanations]
    </div>

    <!-- TIMELINE BOX (if applicable) -->
    <div class="timeline-box">
        <h3>[Timeline Title]</h3>
        <div class="timeline-item">
            <span class="timeline-date">[Date 1]:</span> [Description]
        </div>
        <div class="timeline-item">
            <span class="timeline-date">[Date 2]:</span> [Description]
        </div>
    </div>

    <!-- INSIGHT BOX -->
    <div class="insight-box">
        <h3>[Insight Title]</h3>
        <p>[Strategic insight or framework explanation]</p>
    </div>

    <!-- MORE FIGURES -->
    <div class="figure">
        <img src="[FIGURE_URL]" alt="[Description]">
        <div class="figure-caption">Figure 2: [Caption]</div>
    </div>

    <!-- CONCLUSION -->
    <div class="conclusion-box">
        <h2>Conclusion</h2>
        <p>[Summary of key contributions and implications]</p>
        <ul>
            <li>[Key achievement 1]</li>
            <li>[Key achievement 2]</li>
            <li>[Key achievement 3]</li>
        </ul>
    </div>

    <!-- SOURCE BOX -->
    <div class="source-box">
        <h3>Primary Sources</h3>
        <p>
            <a href="[PAPER_URL]" target="_blank">[Paper Title]</a><br>
            <em>[Authors], [Year]</em>
        </p>
        <p>
            <a href="[ADDITIONAL_URL]" target="_blank">[Additional Resource]</a><br>
            <em>[Description]</em>
        </p>
    </div>

    <!-- NAVIGATION FOOTER (same as header) -->
    <div class="navigation">
        <a href="../index.html">← Home</a>
        <a href="../agent/index.html">Agent Reliability</a>
        <a href="../rag/index.html">RAG Patterns</a>
        <a href="../research-papers/index.html">Research Papers</a>
        <a href="https://join.maxpool.dev" target="_blank">Join Community →</a>
    </div>
</body>
</html>
```

---

## Box Type Reference

### Executive Summary (`.abstract`)
```html
<div class="abstract">
    <h2>Executive Summary</h2>
    <p>Summary with <span class="performance-improvement">+24%</span> improvements highlighted.</p>
</div>
```

### ELI5 Box (`.eli5-box`)
```html
<div class="eli5-box">
    <h3>🎯 ELI5: [Concept]</h3>
    <p>Simple analogy...</p>
</div>
```

### Key Finding (`.key-finding`)
```html
<div class="key-finding">
    <h3>Finding Title</h3>
    <p>Important discovery...</p>
</div>
```

### Methodology Box (`.methodology-box`)
```html
<div class="methodology-box">
    <h3>Methodology</h3>
    <ul>
        <li>Method 1</li>
        <li>Method 2</li>
    </ul>
</div>
```

### Insight Box (`.insight-box`)
```html
<div class="insight-box">
    <h3>Strategic Insight</h3>
    <p>Framework explanation...</p>
</div>
```

### Timeline Box (`.timeline-box`)
```html
<div class="timeline-box">
    <h3>Timeline</h3>
    <div class="timeline-item">
        <span class="timeline-date">2025:</span> Event description
    </div>
</div>
```

### Conclusion Box (`.conclusion-box`)
```html
<div class="conclusion-box">
    <h2>Conclusion</h2>
    <p>Summary...</p>
</div>
```

### Source Box (`.source-box`)
```html
<div class="source-box">
    <h3>Primary Sources</h3>
    <p><a href="URL" target="_blank">Paper Title</a><br>
    <em>Authors, Year</em></p>
</div>
```

---

## Metric Highlighting

| Class | Usage | Color |
|-------|-------|-------|
| `.performance-improvement` | Positive changes: `+24%`, `2× faster` | Green (#27ae60) |
| `.performance-decline` | Negative changes: `-15%`, `slower` | Red (#e74c3c) |
| `.metric` | Neutral metrics: `73%`, `50 minutes` | Orange (#DC8850) |

**Examples:**
```html
<span class="performance-improvement">+24% accuracy</span>
<span class="performance-decline">-15% latency</span>
<span class="metric">73% success rate</span>
```

---

## Figure Patterns

### Standard Figure
```html
<div class="figure">
    <img src="[URL]" alt="[Description]">
    <div class="figure-caption">Figure N: [Caption]</div>
</div>
```

### ArXiv HTML Figures
Figures from ArXiv HTML pages typically have URLs like:
- Direct from HTML: Extract `<img>` src attributes from the page
- CDN paths: `https://arxiv.org/html/[paper-id]/[image-file]`

### AlphaXiv Figures
```
https://paper-assets.alphaxiv.org/figures/[paper-id]/img-[N].jpeg
```

Example:
```html
<img src="https://paper-assets.alphaxiv.org/figures/2509.25370v1/img-2.jpeg" alt="Framework Overview">
```

### Placeholder for Missing Images
```html
<div class="figure">
    <div style="background: #f8f8f8; padding: 40px; border: 2px dashed #DC8850; border-radius: 5px; min-height: 200px; display: flex; justify-content: center; align-items: center;">
        <div style="text-align: center;">
            <h4 style="color: #DC8850;">[Diagram Title]</h4>
            <p>[Description of what would be shown]</p>
        </div>
    </div>
    <div class="figure-caption">Figure N: [Caption]</div>
</div>
```

---

## Badge System

```html
<span class="badge">Default</span>
<span class="badge badge-success">Ready</span>
<span class="badge badge-warning">Soon</span>
<span class="badge badge-danger">Future</span>
```

---

## Index Entry Template

Add to `/research-papers/index.html` in the `<tbody>`:

```html
<tr>
    <td>
        <a href="[filename].html" target="_blank" class="paper-link">
            <strong>[Paper Title]</strong>
        </a>
    </td>
    <td class="description">[150-200 word description. Include: what the paper introduces, key metrics and improvements with specific percentages, benchmarks tested, main implications. Academic but accessible tone.]</td>
</tr>
```

---

## Color Palette

| Purpose | Color Code | Usage |
|---------|------------|-------|
| Primary (Brand) | `#DC8850` | Headers, accents, links |
| Success/Improvement | `#27ae60` | Positive metrics |
| Warning | `#f39c12` | Caution items |
| Danger/Decline | `#e74c3c` | Negative metrics |
| ELI5 Green | `#4caf50` | ELI5 box accent |
| Text | `#333` | Body text |
| Subtle Text | `#666` | Captions, metadata |
| Light Background | `#f8f8f8` | Box backgrounds |

---

## Writing Guidelines

1. **Title**: Use `<br>` to split main title and subtitle
2. **Metrics**: Always use specific numbers, never "significant improvement"
3. **ELI5**: Real-world analogies anyone can understand
4. **Parts**: Structure as "Part 1:", "Part 2:", etc.
5. **Key Findings**: Use dedicated boxes for important discoveries
6. **Tables**: For comparing approaches, benchmarks, architectures
7. **Figures**: Place key figures early, use original paper images
8. **Sources**: Always link to original paper
