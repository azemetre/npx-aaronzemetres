#! /usr/bin/env node

const boxen = require("boxen");
const { bold, blue } = require("chalk");

const lines = [
  bold("Aaron Zemetres"),
  "Software Engineer",
  "",
  bold("       Web: ") + blue("https://azemetre.com"),
  bold("    Github: ") + blue("https://github.com/azemetre"),
  bold("   Twitter: ") + blue("https://twitter.com/azemetre"),
];

const message = lines.join("\n");

const card = boxen(message, {
  borderColor: "blue",
  borderStyle: "double",
  margin: 1,
  padding: 1,
});

process.stdout.write(card + "\n\n");
