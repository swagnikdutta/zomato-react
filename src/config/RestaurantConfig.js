const masterConfig = {
	common: {
		location: {
			fa_icon: 'fa-map-marker',
			path: 'location.address'
		},
		cuisines: {
			fa_icon: 'fa-map-marker',
			path: 'cuisines'
		},
		average_cost_for_two: {
			fa_icon: 'fa-map-marker',
			path: 'average_cost_for_two',
			extraData: {
				currency: {
					path: 'currency'
				}
			}
		},
		has_online_delivery: {
			fa_icon: 'fa-map-marker',
			path: 'has_online_delivery',
		},
		is_table_reservation_supported: {
			fa_icon: 'fa-map-marker',
			path: 'is_table_reservation_supported',
		},
		has_table_booking: {
			fa_icon: 'fa-map-marker',
			path: 'has_table_booking',
		}
	},
	reviews: {

	}
};

module.exports = {
	...masterConfig
}