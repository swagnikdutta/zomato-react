const masterConfig = {
	filters: {
		cuisine: {
			label: 'CUISINE',
			values: [],
			path: {
				name: 'cuisine_name',
				id: 'cuisine_id'
			},
			queryKey: 'cuisines'
		},
		category: {
			label: 'CATEGORY',
			values: [],
			path: {
				name: 'name',
				id: 'id'
			},
			queryKey: 'category'
		}
	}
}

module.exports = {
	...masterConfig
}