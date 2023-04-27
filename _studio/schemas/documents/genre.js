export default {
	title: 'Genre',
	name: 'genre',
	type: 'document',
	fields: [
		{
			title: 'Music genre',
			name: 'musicGenre',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'musicGenre'
			}
		}
	]
}