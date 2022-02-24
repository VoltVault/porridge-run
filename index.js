#! /usr/local/bin/node
const {
	exec
} = require("child_process");

/**
 * porridge-run
 * This script runs a command or even compiles a file at any interval you choose.
 *
 * @author Lil' Wuth <porridgejs.netlify.app>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const {
	clear,
	debug
} = flags;

const scriptStart = () => {
	setTimeout(() => {
		exec(`${flags.command} ${flags.script || ''}`, (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return scriptStart();
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return scriptStart();
			}
			console.log(stdout);
			return scriptStart();
		});
	}, flags.interval || 5000);
};

(async () => {
	init({
		clear
	});
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (flags.script) {
		scriptStart();
	};
})();