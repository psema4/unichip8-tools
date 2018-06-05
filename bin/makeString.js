#!/usr/bin/env node

let inputString = process.argv[2]
  , prefix = process.argv[3] || 'string'
  , label = ''
  , outputString = ''
;

if (!inputString) {
  console.error(`\nno input string provided`);
  process.exit(1);
}

if (inputString.length > 31) {
  console.error(`\nreceived too many characters (${inputString.length})`);
  process.exit(1);
}

label = inputString.toLowerCase().replace(/\s/g, '-');

outputString += `: ${prefix}-${label}\n\t`;

for (let i = 0; i < inputString.length; i++) {
  let ascii = inputString.charCodeAt(i)

  outputString += `0x${ ascii.toString(16) } `;
}

outputString += `0x00`;

console.log(`\n${outputString}`);
process.exit(0);
