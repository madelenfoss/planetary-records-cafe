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
			title: 'Category',
			name: 'category',
			description: 'Starters, sides, burgers, salads etc',
			type: 'array',
			of: [
				{
				type: 'reference',
				to: {
					type: 'menuCategory'
				}
			}
		]
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			}
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