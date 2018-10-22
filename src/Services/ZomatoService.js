import APIService from './APIService';

const baseUrl = 'https://developers.zomato.com/api/v2.1/';

const getCityDetails = async (city) => await APIService.invoke({
	url: `${baseUrl}cities?q=${city}`,
	method: 'GET'
});

const fetchRestaurantCollections = async (cityId) => await APIService.invoke({
	url: `${baseUrl}collections?city_id=${cityId}`,
	method: 'GET'
});

const fetchRestaurantCategories = async () => await APIService.invoke({
	url: `${baseUrl}categories`,
	method: 'GET'
});

const fetchFilteredRestaurants = async (searchQuery) => await APIService.invoke({
	url: `${baseUrl}search?${searchQuery}`,
	method: 'GET'
});

const fetchRestaurantDetails = async (restaurantId) => await APIService.invoke({
	url: `${baseUrl}restaurant?res_id=${restaurantId}`,
	method: 'GET'
});

const fetchRestaurantReviews = async (restaurantId) => await APIService.invoke({
	url: `${baseUrl}reviews?res_id=${restaurantId}`,
	method: 'GET'
});

const fetchCuisinesInCity = async (cityId) => await APIService.invoke({
	url: `${baseUrl}cuisines?city_id=${cityId}`,
	method: 'GET'
});

export default {
	getCityDetails,
	fetchRestaurantCollections,
	fetchRestaurantCategories,
	fetchFilteredRestaurants,
	fetchRestaurantDetails,
	fetchRestaurantReviews,
	fetchCuisinesInCity
};