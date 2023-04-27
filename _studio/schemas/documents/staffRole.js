export default {
	title: 'Staff role',
	name: 'role',
	type: 'document',
	fields: [
		{
			title: 'Role name',
			name: 'roleName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'roleName'
			}
		},
		
	],
}