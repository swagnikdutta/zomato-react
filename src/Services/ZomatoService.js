import APIService from './APIService';

const getCityDetails = async (city) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
		method: 'GET'
	});
} 

const fetchRestaurantCollections = async (cityId) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/collections?city_id=${cityId}`,
		method: 'GET'
	});
}

const fetchRestaurantCategories = async () => {
	return await APIService.invoke({
		url: 'https://developers.zomato.com/api/v2.1/categories',
		method: 'GET'
	});	
}

const fetchFilteredRestaurants = async (searchQuery) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/search?${searchQuery}`,
		method: 'GET'
	});
}

const fetchRestaurantDetails = async (restaurantId) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}`,
		method: 'GET'
	});
}

const fetchRestaurantReviews = async (restaurantId) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${restaurantId}`,
		method: 'GET'
	});
}

const fetchCuisinesInCity = async (cityId) => {
	return await APIService.invoke({
		url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`,
		method: 'GET'
	});
}

export default {
	getCityDetails,
	fetchRestaurantCollections,
	fetchRestaurantCategories,
	fetchFilteredRestaurants,
	fetchRestaurantDetails,
	fetchRestaurantReviews,
	fetchCuisinesInCity
};