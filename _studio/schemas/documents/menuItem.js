export default {
	title: 'Menu Item',
	name: 'menuItem',
	type: 'document',
	fields: [
		{
			title: 'Food name',
			name: 'foodName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'foodName'
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Allergen',
			name: 'allergen',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: {
						type: 'allergen'
					}
				}
			]
			
		}

	],

	
}