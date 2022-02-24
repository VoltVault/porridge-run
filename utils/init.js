const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `porridge-run`,
		tagLine: `by VoltVault Inc.`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#D1A0FF',
		color: '#191A1D',
		bold: true,
		clear
	});
};