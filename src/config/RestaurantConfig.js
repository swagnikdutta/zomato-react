module.exports = {
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
			extraData: [{
				insertAt: 'end',
				message: ' for two people (approx.)'
			}, {
				insertAt: 'start',
				path: 'currency',
			}]
		},
		has_online_delivery: {
			fa_icon: 'fas fa-motorcycle',
			path: 'has_online_delivery',
			isBoolean: true,
			messageOnTruthyValue: 'Online Delivery Available',
			messageOnFalsyValue: 'Online Delivery Unavailable',
		},
		is_table_reservation_supported: {
			fa_icon: 'far fa-calendar-check',
			path: 'is_table_reservation_supported',
			isBoolean: true,
			messageOnTruthyValue: 'Table Reservation Available',
			messageOnFalsyValue: 'Table Reservation Unavailable',
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