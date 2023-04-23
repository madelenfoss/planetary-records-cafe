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
				source: 'foodCategory'
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
			title: 'Allergens',
			name: 'allergens',
			type: 'reference',
			to: {
				type: 'allergens'
			}
		}

	],

	
}