const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	execute: {
		type: `boolean`,
		alias: `r`,
		default: false,
		desc: `Run a command`
	},
	command: {
		type: `string`,
		alias: `c`,
		desc: `Run any command you want!`
	},
	script: {
		type: `string`,
		alias: `s`,
		desc: `The command or flag to the command you wnt to run.`
	},
	interval: {
		type: `number`,
		alias: `i`,
		default: 5000,
		desc: `The interval that will be between each command execution`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `porridge-run`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
