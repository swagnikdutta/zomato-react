const masterConfig = {
	common: {
		location: {
			fa_icon: 'fas fa-map-marker-alt',
			path: 'location.address'
		},
		cuisines: {
			fa_icon: 'fas fa-utensils',
			path: 'cuisines'
		},
		average_cost_for_two: {
			fa_icon: 'fas fa-money-bill-wave',
			path: 'average_cost_for_two',
			extraData: {
				currency: {
					path: 'currency'
				}
			}
		},
		has_online_delivery: {
			fa_icon: 'fas fa-motorcycle',
			path: 'has_online_delivery',
		},
		is_table_reservation_supported: {
			fa_icon: 'far fa-calendar-check',
			path: 'is_table_reservation_supported',
		},
		has_table_booking: {
			fa_icon: 'fas fa-map-marker',
			path: 'has_table_booking',
		}
	},
	reviews: {
		rating: {
			path: 'rating'
		},
		review_text: {
			path: 'review_text'
		},
		rating_color: {
			path: 'rating_color'
		},
		rating_text: {
			path: 'rating_text'
		},
		name: {
			path: 'user.name'
		},
		profile_image: {
			path: 'user.profile_image'
		}
	}
};

module.exports = {
	...masterConfig
}