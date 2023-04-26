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

		
	],

	
}
