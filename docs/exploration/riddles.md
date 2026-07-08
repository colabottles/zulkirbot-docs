# Riddles

During `!explore`, there is a 4% chance of encountering a riddle. A disembodied voice poses a question from a pool of 40 riddles. Answer correctly for XP. Answer wrong too many times and face consequences.

## How It Works

When a riddle appears, the bot posts the question and a 60-second timer begins.

Type your answer in chat:

!solveriddle [answer]

- You have **2 wrong attempts** before the third triggers an environmental hazard.
- If the **60-second timer expires** without an answer, it counts as a wrong answer and the hazard fires.
- Correct answer rewards **+250 XP**.

## Example

> 🧩 A voice echoes from the dark: "The more you take, the more you leave behind. What am I?" Type !solveriddle [answer] within 60 seconds.

!solveriddle footsteps

> 🧩 @username — correct! The voice in the dark seems satisfied. +250 XP.

## Wrong Answer

> 🧩 @username — that's not it. 2 attempts remaining.

After 3 wrong answers or expiry:

> 🧩 @username — the dungeon has heard enough.

Followed immediately by an environmental hazard.

## Tips

- Answers are single words in most cases.
- Common answer types: objects, natural phenomena, concepts, body parts.
- The riddle pool draws from classic D&D and fantasy riddle traditions.
