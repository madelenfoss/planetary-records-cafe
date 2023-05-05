export default {
	title: 'Staff',
	name: 'staff',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: rule => rule.required()
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
			type: 'image',
			fields: [
				{
					title: 'Alternative text',
					name: 'alternative',
					description: 'Important! For accessibility. Keep it short and descriptive. Keep field blank if image is purely decorative',
					type: 'string',
				},
				{
					type: 'string',
					name: 'credits',
					title: 'Credits'
				},
			],
		},
		{
			title: 'Role',
			name: 'role',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: {
						type: 'role'
					}
				}

			]
		}

	],
}