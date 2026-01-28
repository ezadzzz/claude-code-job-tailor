---
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Bash, BashOutput
description: Create a personalized, story-driven cover letter using the interactive co-authoring workflow | argument-hint company-name
---

# Cover Letter Co-Authoring Command

This command activates the **cover letter co-authoring workflow**, an interactive process that creates compelling, story-driven cover letters using the Cultivated Culture framework.

## Usage

```
/cover-letter company-name
```

## What This Command Does

Unlike template-based cover letter generation, this command guides you through a comprehensive co-authoring process:

### Stage 1: Deep Context Gathering (10-15 min)
- **Company Research**: Searches for recent news, company values, and initiatives
- **Context Interview**: Asks about your motivations, relevant achievements, personal connections, and unique fit
- **Story Discovery**: Identifies 3-5 achievement stories with quantifiable metrics

### Stage 2: Iterative Drafting (10-15 min)
- **Opening Paragraph**: Generate 3 options for story-driven opening
- **Body Paragraphs**: Craft achievement-focused content with metrics
- **Closing**: Create compelling call-to-action
- **Refinement**: Iterate based on your feedback

### Stage 3: Polish & Validation (5 min)
- **Quality Check**: Verify against Cultivated Culture best practices
- **Schema Validation**: Ensure YAML format is correct
- **Integration**: Connect with tailor-server for live preview

## Prerequisites

Before running this command, ensure:

1. **Company folder exists**: `resume-data/tailor/[company-name]/`
2. **Required files present**:
   - `metadata.yaml` (company name, position)
   - `job_analysis.yaml` (job requirements, focus areas)
3. **Source data available**:
   - `resume-data/sources/resume.yaml`
   - `resume-data/sources/professional-experience.yaml`

If prerequisites are missing, run `/tailor [company-name]` first to set up the company folder.

## The Cultivated Culture Framework

This command follows the proven Cultivated Culture cover letter framework:

### Three-Section Structure:
1. **Opening**: Story-driven company connection (NOT "I'm excited to apply...")
2. **Body**: Achievement stories with quantifiable metrics
3. **Closing**: Clear call-to-action

### Key Principles:
- **Story-driven**: Science proves stories are more memorable than credentials
- **Results-focused**: Every achievement must include quantifiable metrics
- **Personality-rich**: Show authentic voice, not corporate speak
- **Company-specific**: Letter should be impossible to reuse for other companies

### What This Framework Avoids:
- Generic openings and closings
- Resume duplication
- Credential listing without results
- "Dear Hiring Manager" salutations
- Personality-free corporate tone

## Command Pipeline

### 1. Load Prerequisites

Read required files:
- `resume-data/tailor/[company-name]/metadata.yaml`
- `resume-data/tailor/[company-name]/job_analysis.yaml`
- `resume-data/sources/resume.yaml`
- `resume-data/sources/professional-experience.yaml`

### 2. Company Research

Use WebSearch to research:
- Recent company news and developments
- Company values and culture
- Recent projects or initiatives
- Industry positioning

### 3. Context Interview

Conduct conversational interview covering:
- **Company Connection**: Why this company? What draws you here?
- **Achievement Stories**: 3-5 relevant stories with metrics
- **Personal References**: Any connections at the company?
- **Unique Fit**: What makes you specifically suited?
- **Career Goals**: Where does this fit in your trajectory?
- **Tone Preferences**: Formal vs. conversational balance

**Important**: This interview continues until sufficient context is gathered. No arbitrary question limits.

### 4. Iterative Drafting

Build the letter section by section:
- Generate multiple options for each section
- User selects and provides feedback
- Iterate until satisfied
- Ensure all achievements include quantifiable metrics

### 5. Validation & Output

- Convert to YAML schema format
- Run schema validation
- Save to `resume-data/tailor/[company-name]/cover_letter.yaml`
- Integrate with tailor-server for live preview

## Output

Creates `cover_letter.yaml` with:

```yaml
cover_letter:
  name: 'Candidate Name'
  company: 'Target Company'
  position: 'Position Title'
  job_focus: [...] # Copied from job_analysis.yaml
  primary_focus: 'senior_engineer'
  date: '2026-01-28'

  personal_info:
    email: 'email@example.com'
    phone: '+1 (555) 555-5555'
    linkedin: 'https://linkedin.com/in/username'

  content:
    letter_title: 'Cover Letter Position Title'
    opening_line: 'Dear [Name/Team],'
    body:
      - 'Story-driven opening paragraph...'
      - 'Achievement-focused body paragraph with metrics...'
      - 'Company-specific fit paragraph...'
      - 'Compelling closing with call-to-action...'
    signature: |
      Sincerely,
      Candidate Name
```

## Reference Materials

The skill includes comprehensive reference materials:

- **Framework Guide**: `.claude/skills/cover-letter-coauthoring/reference/cultivated-culture-framework.md`
  - Complete 3-section structure
  - Storytelling principles
  - Quantification formulas
  - Tone guidelines

- **Common Mistakes**: `.claude/skills/cover-letter-coauthoring/reference/common-mistakes.md`
  - 27 auto-rejection mistakes
  - Content, tone, structure categories
  - Self-review checklist

## Tips for Best Results

### Before Running:
1. Have 3-5 achievement stories ready with specific metrics
2. Research the company yourself (you'll be asked about it)
3. Think about why THIS company appeals to you
4. Consider any personal connections or referrals

### During Context Gathering:
- Be specific with numbers and metrics
- Share authentic stories, not polished elevator pitches
- Mention any company research you've done
- Be honest about your motivation

### During Drafting:
- Give specific feedback ("make this more conversational" vs "looks good")
- If something doesn't sound like you, say so
- Ask for alternative phrasings if needed

## Comparison: Old vs New Approach

### Old (Template-Based):
- Selects pre-written template based on job focus
- Fills in placeholders with company name/position
- Generic achievements without personalization
- No user input during generation
- Result: Sounds like every other cover letter

### New (Co-Authoring):
- Researches company in real-time
- Interviews you about specific experiences
- Crafts unique narrative with your voice
- Iterative refinement based on feedback
- Result: Could only have been written by you, for this role

## Related Commands

- `/tailor [company-name]`: Set up company folder and enter editing mode
- `/generate-pdf [company-name]`: Generate final PDF after cover letter is complete

## Troubleshooting

**"Company folder not found"**
→ Run `/tailor [company-name]` first to create the folder and prerequisites

**"Web search failed"**
→ Proceed with interview-based context gathering; provide company info manually

**"Validation failed"**
→ The skill will auto-fix validation errors; if persistent, check job_focus weights sum to 1.0

**"No achievement metrics"**
→ Every body paragraph needs quantifiable results; be specific with numbers

---

Now invoke the cover letter co-authoring skill for the specified company.
