export default {
	title: 'Allergens',
	name: 'allergens',
	type: 'document',
	fields: [
		{
			title: 'Allergen name',
			name: 'allergenName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'allergenName'
			}
		},
		
	],

	
}