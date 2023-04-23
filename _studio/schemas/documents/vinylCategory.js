export default {
	title: 'Vinyl category',
	name: 'vinylCategory',
	type: 'document',
	fields: [
		{
			title: 'Genre',
			name: 'genre',
			type: 'string',
			of: [
				{
					type: 'reference',
					to: {
						type: 'genre'
					}
				}
			]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'genre'
			}
		}
	]
}