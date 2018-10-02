const masterConfig = {
	restaurant: {
		name: {
			path: 'name',
		},
		aggregate_rating: {
			path: 'user_rating.aggregate_rating',
		},
		rating_color: {
			path: 'user_rating.rating_color',
		},
		votes: {
			path: 'user_rating.votes',
		},
		address_short: {
			path: 'location.locality_verbose',
		},
		address_long: {
			path: 'location.address',
		},
		cuisines: {
			path: 'cuisines',
		},
		average_cost_for_two: {
			path: 'average_cost_for_two',
			extraData: [{
				insertAt: 'start',
				path: 'restaurant.currency',
			}]
		},
		thumb: {
			path: 'thumb'
		}
	},
	// filters: {
	// 	rating: {
	// 		path: 'rating'
	// 	}
	// }
};

module.exports = {
	...masterConfig
}