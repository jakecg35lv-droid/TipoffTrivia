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

## High school (HS Daily, `hs-data.js`)

The HS Daily is a separate game with its own rules. Rules 1, 3, 6, 7 and 8 above apply unchanged. Instead of rules 2 and 4:

- **Boys' high school basketball only**, and only the **last 10 graduating classes** (currently 2017–2026). Roll the window forward each spring once the new McDonald's All American roster is official.
- **School prompts use the commitment on the official roster** (the college listed when the player was named), not where he ended up.
- **Current-class rankings (ESPN / 247 top 100) are not used yet.** They change monthly, so answer pools go stale. If added, each prompt must name the ranking and the date it was taken ("2027 ESPN 100 as of Nov 2026") and be refreshed or retired when the ranking updates.
- **No category (`c`) tags** while the pool is one kind of prompt; the Daily's 2-per-category cap would leave fewer than 7 prompts.

Pool math: same as College. A clean 30-day HS Daily needs about 120 easy and 90 medium prompts; the beta launches with 15, so prompts repeat every few days.
