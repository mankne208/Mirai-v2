const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ Lỗi rồi ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ Lỗi rồi ] » ') + data);
			break;
		default:
			console.log(chalk.bgMagenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bgYellowBright('[N-MANK ] » ') + data);
			break;
		case "error":
			console.log(chalk.bgRed('[N-MANK ] » ') + data);
			break;
		default:
			console.log(chalk.bgCyanBright(`[N-MANK ] » `) + data);
			break;
	}
}
