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