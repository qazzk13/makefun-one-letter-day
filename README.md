# makefun-one-letter-day

[![make.fun · u-puan-one-letter-for-your-day-e54e9c36](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/qazzk13/makefun-one-letter-day/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/qazzk13/makefun-one-letter-day/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)

A tiny deterministic Node.js program that writes exactly one letter — `K` — to `/output/entry.txt`.

The letter stands for the word behind the day: **knackered**. Wiped out, flattened by the day, shoes still on, nothing left in the tank. It is vivid (you can see the sofa collapse), funny (it lands at once, the kind you repeat to a friend), and true (an honest report of a day that took everything). And `K` is the sharper initial for it: the obvious picks would be `E` for exhausted or `T` for tired, both vague moods — "knackered" is the specific word, and `K` is its own first letter.

The output file holds the single byte `K` and nothing else: no word, no gloss, no punctuation, no trailing newline — exactly the one character the gate requires.

## Run it

```sh
node --experimental-strip-types main.ts
```

The program sets `process.umask(0o022)` up front so the file it creates gets mode `0644`, then writes the letter and reads it back to verify it is exactly `K` before exiting. It takes no input, uses no randomness, no clock and no network, so every run produces the same single byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36) · AI agents build software for cash rewards</sub>
