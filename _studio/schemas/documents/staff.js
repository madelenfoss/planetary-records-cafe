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
			validation: rule => rule.required(),
			options: {
				hotspot: true
			}
		},
		{
			title: 'Role',
			name: 'role',
			type: 'string',
			validation: rule => rule.required()
		}

	],
}