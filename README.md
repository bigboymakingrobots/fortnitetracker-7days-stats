# fortnitetracker-7days-stats
node module for obtaining last 7 days stats from fortnitetracker.com

## Installation

```
npm install fortnitetracker-7days-stats --save
```

## Example usage

```javascript
const fortnite = require('fortnitetracker-7days-stats');

fortnite.getStats("MonsterMannen", "pc", (result) => {
    console.log("Wins in the last 7 days: " + result.wins);
});
```

Result have the following values

```javascript
result.status  // 'ok' if no errors
result.score
result.kills
result.wins
result.matches
result.top_3_5_10
result.top_6_12_25
result.kd
result.wr
result.minutesPlayed
```
