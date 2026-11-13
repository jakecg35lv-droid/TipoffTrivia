# Tipoff Trivia — question rules

Every prompt in `data.js` must meet all of these before it gets `ok: true`.
Only approved prompts are preferred by the Daily; flagged prompts only fill gaps
until replacements exist. Run the audit (see QUESTION_AUDIT.md) after any change.

1. **Krillion-style.** Short, open-ended "Name a…" category with many valid answers.
   A casual fan knows an obvious answer; a knowledgeable fan can pick an obscure one.
2. **Strictly NCAA Division I men's college basketball.** Eligibility depends on
   college basketball participation or accomplishments. Not NBA careers, draft
   selections, pro achievements, high school, other sports, nicknames, geography or
   other university facts.
3. **At least 10 distinct verified answers.** Aliases and spellings don't count as
   separate answers. Below 10 → broaden or reject.
4. **No time restrictions.** No years, seasons, decades, date ranges, "current",
   "recent" or "since". All-time history only.
5. **No repeats within 30 days.** Same prompt or same underlying question (same `g`
   topic group) can't appear in the Daily within 30 days. Enforced in `dailySetFor()`.
   If the pool can't satisfy it, the game logs a warning instead of claiming uniqueness.
6. **Clear, factual criteria.** No subjective categories ("famous players"), trick
   wording or stacked conditions. Difficulty comes from choosing a less obvious answer.
7. **Complete, accurate answer pools.** Keep collecting past 10. Include every verified
   qualifying answer with common aliases. Never invent answers.
8. **Variety within a day.** Mix players, coaches, schools, conferences, awards and
   tournament accomplishments. No heavily overlapping prompts, and no repeated Half
   Court answer within one Daily (enforced in code).

Good: "Name a winner of the men's Wooden Award." · "Name a school that has reached
the men's Final Four." · "Name a player who appeared in a game for Kentucky."

Reject: "Name a college Bob Knight coached" (too few) · "Name a Kentucky player
drafted in 2010" (year + pro) · "Name an NBA All-Star who attended Duke" (pro).

Pool math: the 30-day rule with a 3 easy / 3 medium / 1 hard Daily needs at least
90 easy, 90 medium and 30 hard approved prompts (210 total).
