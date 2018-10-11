const masterConfig = {
	filters: {
		cuisine: {
			label: 'CUISINE',
			values: [],
			path: {
				name: 'cuisine_name',
				id: 'cuisine_id'
			}
		},
		category: {
			label: 'CATEGORY',
			values: [],
			path: {
				name: 'name',
				id: 'id'
			}
		}
	}
}

module.exports = {
	...masterConfig
}