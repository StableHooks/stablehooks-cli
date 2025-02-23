#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program
	.name("stablehooks")
	.description("CLI for testing webhooks from StableHooks")
	.version("0.0.1");

// Log function
function logSuccess(message) {
	console.log(`\x1b[32mStableHooks ➜ \x1b[0m${message}`);
}

function logError(message) {
	console.error(`\x1b[31mStableHooks ➜ \x1b[0m${message}`);
}

// Listen command
program
	.command("listen")
	.description("Listen for incoming webhooks")
	.option("--key <key>", "Key for listening to webhooks")
	.action((options) => {
		const { key } = options;
		if (!key) {
			logError("--key is required");
			process.exit(1);
		}
		logSuccess(`Listening for incoming webhooks with key: ${key}`);
	});

program.parse(process.argv);
