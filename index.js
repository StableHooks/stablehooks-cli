#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program
	.name("stablehooks")
	.description("CLI for testing webhooks from StableHooks")
	.version("0.0.1");

// Log function
function log(message) {
	console.log(`\x1b[32mStableHooks ➜ \x1b[0m${message}`);
}

// Listen command
program
	.command("listen <key>")
	.description("Listen for incoming webhooks")
	.action((key) => {
		log(`Listening for incoming webhooks with key: ${key}`);
	});

program.parse(process.argv);
