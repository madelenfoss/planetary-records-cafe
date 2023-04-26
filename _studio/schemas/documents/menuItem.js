export default {
	title: 'Menu Item',
	name: 'menuItem',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
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
			
		},
		{
			title: 'Price',
			description: 'Price in NOK',
			name: 'price',
			type: 'number',
		}
	],

	
}