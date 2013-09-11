var task = {
	dev: {
		options: {
			safe: true,
			config: "_config.yml"
		}
	},
	dist: {
		options: {
			safe: true,
			config: "_config_dist.yml"
		}
	}
};

module.exports = task;
