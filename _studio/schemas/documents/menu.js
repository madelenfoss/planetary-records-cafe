export default {
	title: 'Menu',
	name: 'menu',
	type: 'document',
	fields: [
		{
			title: 'Food category',
			name: 'foodCategory',
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
			title: 'Name',
			name: 'name',
			type: 'reference',
			to: {
				type: 'menuItem'
			}
		}
	],

	
}