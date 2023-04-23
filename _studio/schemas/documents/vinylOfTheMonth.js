export default {
	title: 'Vinyl of the Month',
	name: 'vinylOfTheMonth',
	type: 'document',
	fields: [
		{
			title: 'Album name',
			name: 'albumName',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: {
						type: 'shopItem'
					}
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
		}

	]
}