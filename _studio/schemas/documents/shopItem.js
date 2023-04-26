export default {
	title: 'Shop item',
	name: 'shopItem',
	type: 'document',
	fields: [
		{
			title: 'Album of the Month',
			name: 'name',
			type: 'reference',
			to: [
			{
				type: 'album'
			}
			]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			title: 'Price',
			description: 'Price in NOK',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: {
				type: 'vinylCategory'
			}


		},
		{
			title: 'Image of album cover',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			}
		},

	],

	
}