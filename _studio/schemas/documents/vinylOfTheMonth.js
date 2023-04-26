export default {
	title: 'Vinyl of the Month',
	name: 'vinylOfTheMonth',
	type: 'document',
	fields: [
		{
			title: 'Album name',
			name: 'albumName',
			type: 'reference',
			to: [
				{
					type: 'album',
				}
			]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'albumName'
			}
		},
		{
			title: 'Artist name',
			name: 'artistName',
			type: 'reference',
			to: [
				{
					type: 'artist'
			}
			]
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
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
			type: 'array',
			of: [
				{
				type: 'reference',
				to: {
					type: 'vinylCategory'
				}
			}
		]
		},
		{
			title: 'Album cover image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
	]
}