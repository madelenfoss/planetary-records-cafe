export default {
	title: 'Artist',
	name: 'artist',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
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
			title: 'Album',
			name: 'album',
			type: 'reference',
			to: [
				{
					type: 'album'
				}
			]
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
		}
	]
}