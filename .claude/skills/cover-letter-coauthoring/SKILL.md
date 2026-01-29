---
name: cover-letter-coauthoring
description: Create personalized, story-driven cover letters through interactive co-authoring. Use when user wants to write or improve a cover letter, invokes `/cover-letter [company]`, or needs help with job application letters. This skill conducts company research via Perplexity API (perplexity_ask tool), interviews the user about achievements and motivations, and iteratively drafts content following the Cultivated Culture framework (story-driven openings, quantifiable achievements, authentic voice). Outputs schema-validated YAML for the claude-code-job-tailor system.
---

# Cover Letter Co-Authoring

Create compelling cover letters through a three-stage interactive workflow: context gathering, iterative drafting, and validation.

## Prerequisites

Required files in `resume-data/tailor/[company-name]/`:
- `metadata.yaml` - company, position
- `job_analysis.yaml` - job requirements, focus areas

Source files in `resume-data/sources/`:
- `resume.yaml` - candidate background
- `professional-experience.yaml` - achievement details

If missing, prompt user to run `/tailor [company-name]` first.

## Three-Stage Workflow

### Stage 1: Context Gathering

1. **Load existing data** from prerequisite files
2. **Research company** using `perplexity_ask` tool (Perplexity MCP server):
   - Recent news/announcements
   - Company values and culture
   - Recent initiatives
3. **Interview user** conversationally covering:
   - Company connection (why this company specifically?)
   - 3-5 achievement stories with quantifiable metrics
   - Personal references at company (if any)
   - Unique fit and career goals
   - Tone preferences

See `reference/interview-guide.md` for detailed question categories.

**Exit condition:** Move to Stage 2 only when you have authentic motivation story, 3+ achievements with metrics, and user confirms context is complete.

### Stage 2: Iterative Drafting

Follow Cultivated Culture framework from `reference/cultivated-culture-framework.md`:

**Structure:**
1. **Opening** - Story-driven company connection (NOT "I'm excited to apply...")
2. **Body** - 2-3 paragraphs with achievement stories and metrics
3. **Closing** - Clear call-to-action with referral mention if applicable

**Process for each section:**
1. Generate 2-3 options
2. User selects or requests modifications
3. Iterate until approved

**Critical requirements:**
- Every body paragraph must include quantifiable metrics
- Avoid common mistakes from `reference/common-mistakes.md`
- One page maximum (250-400 words)

### Stage 3: Validation & Output

1. **Convert to YAML** following schema:

```yaml
version: '2.0.0'
analysis_date: 'YYYY-MM-DD'

job_focus:  # Copy exactly from job_analysis.yaml
  - primary_area: 'value'
    specialties: [list]
    weight: 0.X  # Must sum to 1.0

cover_letter:
  name: 'Full Name'
  company: 'Company'
  position: 'Position'
  primary_focus: 'highest weighted primary_area'
  date: 'YYYY-MM-DD'
  personal_info:
    address: 'Location'
    email: 'email'
    phone: 'phone'
    linkedin: 'url'
  content:
    letter_title: 'Cover Letter Position'
    opening_line: 'Dear [Name/Team],'
    body:
      - 'Opening paragraph'
      - 'Body paragraph 1'
      - 'Body paragraph 2'
      - 'Closing paragraph'
    signature: |
      Sincerely,
      Name
```

2. **Write to** `resume-data/tailor/[company-name]/cover_letter.yaml`

3. **Validate:** `bun run validate:cover-letter -C [company-name]`
   - Fix any errors and re-validate until passing

4. **Generate PDF:** `bun run generate-pdf -C kasa -D cover-letter`

## Quality Checklist

Before completion, verify:
- [ ] Story-driven opening (no generic "I'm excited to apply")
- [ ] 3+ quantifiable achievements with specific metrics
- [ ] Company-specific (couldn't be reused for another company)
- [ ] Authentic voice evident
- [ ] One page length
- [ ] Schema validation passes
- [ ] Referral mentioned if provided

## Reference Files

- `reference/cultivated-culture-framework.md` - Complete framework guide, tone examples, ATS optimization
- `reference/common-mistakes.md` - 27 auto-rejection mistakes to avoid
- `reference/interview-guide.md` - Detailed question categories for context gathering

## Error Handling

**Missing prerequisites:** Prompt to run `/tailor [company-name]` first
**Perplexity unavailable:** Proceed with job_analysis data and ask user for company context
**Validation fails:** Read errors, fix YAML, re-validate
