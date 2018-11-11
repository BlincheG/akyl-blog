export default {
	state: {
		ads: [
					{
						title: 'First',
						description: 'Hello i am description',
						promo: false,
						imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
						id: '123'
					},
					{
						title: 'Second',
						description: 'Hello i am description',
						promo: true,
						imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
						id: '1234'
					},
					{
						title: 'Third',
						description: 'Hello i am description',
						promo: true,
						imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
						id: '1235'
					}
				]
	},
	mutations: {},
	actions: {},
	getters: {
		ads (state) {
			return state.ads
		},
		promoAds (state) {
			return state.ads.filter(ads => {
				return ad.promo === true
			})
		},
		myAds (state) {
			return state.ads
		}
	}
}