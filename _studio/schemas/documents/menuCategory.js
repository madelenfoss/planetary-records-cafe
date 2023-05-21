export default {
	title: 'Menu category',
	name: 'menuCategory',
	type: 'document',
	fields: [
		{
			title: 'Type of food',
			name: 'foodType',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'foodType'
			}	
		},
		{
			title: 'Order number',
			name: 'orderNumber',
			type: 'number',
			description: 'Give each category a number starting at 1, where number 1 is the first category listed on the menu, i.e. "starters"'
		},
	]
}