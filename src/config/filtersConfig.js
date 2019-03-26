module.exports = {
	filters: {
		cuisines: {
			label: 'CUISINE',
			values: [],
			path: {
				name: 'cuisine_name',
				id: 'cuisine_id'
			},
			queryKey: 'cuisines',
			uri_encode: true,
		},
		category: {
			label: 'CATEGORY',
			values: [],
			path: {
				name: 'name',
				id: 'id'
			},
			queryKey: 'category',
			uri_encode: true,
		}
	}
}