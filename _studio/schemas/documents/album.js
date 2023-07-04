export default {
	title: 'Album',
	name: 'album',
	type: 'document',
	fields: [
		{
			title: 'Album name',
			name: 'albumName',
			type: 'string',
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
			title: 'Artist',
			name: 'artist',
			type: 'reference',
			to: [
				{
					type: 'artist'
				}
			]
		},
		{
			title: 'Release date',
			name: 'releaseDate',
			type: 'date',
			options: {
				dateFormat: 'DD.MM.YY'
			}
		},
		{
			title: 'Stock',
			name: 'stock',
			type: 'number'
		},
		{
			title: 'Genre',
			name: 'genre',
			type: 'reference',
			to: [
				{
					type: 'genre'
				}
			]
		},
		{
			title: 'Price',
			description: 'Price in NOK',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Album cover image',
			name: 'albumCoverImage',
			type: 'image',
			fields: [
				{
					title: 'Alternative text',
					name: 'alternative',
					description: 'Important! For accessibility. Keep it short and descriptive. Keep field blank if image is purely decorative',
					type: 'string',
				},
				{
					type: 'string',
					name: 'credits',
					title: 'Credits'
				},
			],
			options: {
				hotspot: true
			},
		},
		{
			title: 'Vinyl of the month',
			name: 'month',
			type: 'boolean'
		}
	]
}
