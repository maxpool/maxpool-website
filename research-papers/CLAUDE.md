# Research Papers - Documentation & Guidelines

## Overview
This directory contains comprehensive research paper summaries and analyses focused on AI agent engineering, reliability, and implementation patterns. Each paper is presented in a consistent academic format with high information density and practical insights.

## Directory Structure
```
research-papers/
├── CLAUDE.md                        # This documentation file
├── index.html                       # Research papers index with descriptions
├── ai_reliability_timeline.html    # Half-life analysis & exponential growth
├── agent_failure_learning.html     # LLM agent failure analysis & remediation
├── deepseek_ocr_report.html       # Vision as compression for text processing
├── agentflow_report.html          # Trainable agentic framework
├── reasoningbank_report.html      # Memory framework for self-evolution
├── curse_of_instructions_report.html # Multiple instruction limitations
└── *.pdf                           # PDF versions of some papers
```

## Adding a New Research Paper

### Step 1: Create the Paper HTML File
Create a new HTML file following the naming convention: `[topic]_[subtopic]_report.html`

### Step 2: HTML Structure Template
Use this template for consistency:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Paper Title] - [Brief Description]</title>
    <style>
        /* Copy the complete style section from ai_reliability_timeline.html */
        /* This ensures visual consistency across all papers */
    </style>
</head>
<body>
    <!-- Navigation Header -->
    <div class="navigation">
        <a href="../index.html">← Home</a>
        <a href="../agent/index.html">Agent Reliability</a>
        <a href="../rag/index.html">RAG Patterns</a>
        <a href="../research-papers/index.html">Research Papers</a>
        <a href="https://join.maxpool.dev" target="_blank">Join Community →</a>
    </div>

    <!-- Main Title -->
    <h1>[Main Title]<br>[Subtitle if applicable]</h1>

    <!-- Authors -->
    <div class="authors">
        [Author information]<br>
        <em>[Date]</em>
    </div>

    <!-- Executive Summary -->
    <div class="abstract">
        <h2>Executive Summary</h2>
        <p>[2-3 paragraph summary with key metrics highlighted using <span class="performance-improvement">]</p>
    </div>

    <!-- ELI5 Box -->
    <div class="eli5-box">
        <h3>🎯 ELI5: [Concept Name]</h3>
        <p>[Simple analogy explaining the core concept]</p>
    </div>

    <!-- Main Content Sections -->
    <!-- Follow the pattern of numbered parts -->

    <!-- Footer Navigation -->
    <div class="navigation">
        [Same as header]
    </div>
</body>
</html>
```

### Step 3: Content Guidelines

#### Required Sections:
1. **Executive Summary**: 2-3 paragraphs with key metrics
2. **ELI5 Box**: Simple explanation for non-experts
3. **Main Content Parts**: Numbered sections (Part 1, Part 2, etc.)
4. **Key Findings**: Highlighted boxes for important discoveries
5. **Tables**: Performance metrics, comparisons, benchmarks
6. **Figures**: Include actual paper figures when available
7. **Conclusion Box**: Summary and implications
8. **Source Box**: Links to original paper and resources

#### Formatting Standards:

##### Metrics and Performance:
- Use `<span class="performance-improvement">+24%</span>` for positive improvements
- Use `<span class="performance-decline">-15%</span>` for negative changes
- Use `<span class="metric">73%</span>` for neutral metrics
- Always include specific numbers, not vague improvements

##### Special Content Boxes:
```html
<!-- Key Finding -->
<div class="key-finding">
    <h3>Title</h3>
    <p>Important discovery or insight</p>
</div>

<!-- Methodology -->
<div class="methodology-box">
    <h3>Title</h3>
    <ul>
        <li>Method points</li>
    </ul>
</div>

<!-- Insight -->
<div class="insight-box">
    <h3>Title</h3>
    <p>Strategic insight or framework</p>
</div>

<!-- Timeline -->
<div class="timeline-box">
    <h3>Title</h3>
    <div class="timeline-item">
        <span class="timeline-date">Date:</span><br>
        Description
    </div>
</div>
```

##### Tables:
```html
<table>
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data</td>
            <td>Data</td>
        </tr>
    </tbody>
</table>
```

##### Figures:
```html
<div class="figure">
    <img src="[URL]" alt="[Description]">
    <div class="figure-caption">Figure [N]: [Caption]</div>
</div>
```

For AlphaXiv papers, use pattern:
`https://paper-assets.alphaxiv.org/figures/[paper-id]/img-[N].jpeg`

### Step 4: Add to Index

Add entry to `/research-papers/index.html` in the table:

```html
<tr>
    <td>
        <a href="[filename].html" target="_blank" class="paper-link">
            <strong>[Paper Title]</strong>
        </a>
    </td>
    <td class="description">[150-200 word description highlighting key metrics, methods, and improvements. Focus on specific numbers and practical implications.]</td>
</tr>
```

#### Index Entry Guidelines:
1. **Title**: Use the full paper title or a clear, descriptive version
2. **Description Length**: 150-200 words (3-4 sentences)
3. **Required Elements**:
   - What the paper introduces (method/framework/analysis)
   - Key metrics and improvements (use specific percentages)
   - Benchmarks or environments tested
   - Main implications or breakthroughs
4. **Style**: Academic but accessible, emphasizing practical value

### Step 5: Quality Checklist

Before committing, verify:

- [ ] HTML validates without errors
- [ ] All navigation links work correctly
- [ ] Figures load properly (use actual paper figures when available)
- [ ] Metrics are specific and highlighted appropriately
- [ ] ELI5 explanation is genuinely simple
- [ ] Tables are responsive and readable
- [ ] Source links to original paper are included
- [ ] Added to index.html with proper description
- [ ] Consistent styling with other papers
- [ ] No placeholder content remains

## Common Paper Sources

### Primary Sources:
- **ArXiv**: https://arxiv.org/
- **AlphaXiv**: https://www.alphaxiv.org/
- **Papers with Code**: https://paperswithcode.com/
- **OpenReview**: https://openreview.net/
- **Company Research Blogs**: Anthropic, OpenAI, DeepMind, etc.

### Image Assets:
- For AlphaXiv papers: `https://paper-assets.alphaxiv.org/figures/[paper-id]/img-[N].jpeg`
- For ArXiv: Often need to extract from PDF or find author's GitHub
- Always prefer original figures over recreated diagrams

## Style Philosophy

### Information Density:
- Pack maximum useful information per paragraph
- Use specific metrics, not generic statements
- Include performance improvements with percentages
- Cite benchmarks and test environments

### Visual Hierarchy:
- Use boxes to highlight key findings
- Tables for comparing approaches
- Figures to explain complex concepts
- Color coding for performance (green=good, red=bad, orange=warning)

### Developer Focus:
- Emphasize practical implications
- Include implementation considerations
- Discuss limitations honestly
- Provide actionable insights

## Paper Categories

Current focus areas:
1. **Agent Reliability**: Failure analysis, debugging, robustness
2. **RAG Patterns**: Retrieval, memory, context management
3. **Benchmarks**: Performance analysis, evaluation methods
4. **Architecture**: System design, frameworks, orchestration
5. **Scaling**: Test-time compute, inference optimization
6. **Emerging Techniques**: Novel approaches, breakthrough methods

## Maintenance

### Regular Updates:
- Review and update metrics when new versions released
- Add related papers to maintain comprehensive coverage
- Update links if sources move
- Add new categories as field evolves

### Version Control:
- Commit message format: `Add [paper-name] research summary`
- Include brief description of paper's main contribution
- Tag significant additions for easy reference

## Tips for Writing Summaries

1. **Start with the Abstract**: But expand significantly beyond it
2. **Focus on Results**: Specific improvements and metrics
3. **Explain the Why**: Not just what, but why it matters
4. **Connect to Other Work**: Reference related papers when relevant
5. **Be Critical**: Include limitations and open questions
6. **Use Examples**: Concrete examples make concepts clearer
7. **Visual First**: Add figures early, build text around them

## Contact

For questions about paper selection or formatting:
- Check existing papers for examples
- Maintain consistency with established patterns
- Prioritize papers with practical engineering value