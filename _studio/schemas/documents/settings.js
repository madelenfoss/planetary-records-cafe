export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Announcement',
			name: 'announcement',
			type: 'object',
			fields: [
				{
					title: 'Text',
					name: 'text',
					type: 'string',
				},
				{
					title: 'Image',
					name: 'image',
					type: 'image'
				},
				{
					title: 'Visible',
					name: 'visible',
					type: 'boolean',
				},
			]
		}
	],

	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}