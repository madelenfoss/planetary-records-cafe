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
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Album cover image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			title: 'Price',
			description: 'Price in NOK',
			name: 'price',
			type: 'number'
		}
	]
}