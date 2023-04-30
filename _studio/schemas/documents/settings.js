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
					title: 'Visible',
					name: 'visible',
					type: 'boolean',
				},
			]
		},
		{
			title: 'Frontpage header',
			name: 'frontpageHeader',
			type: 'string',
			description: "E.g.: 'Welcome to Planetary Records Café'"
		},
		{
			title: 'Description of the place',
			name: 'placeDescription',
			description: 'Write a short introduction',
			type: 'text',
		},
		// {
		// 	title: 'Slideshow image info',
		// 	name: 'slideshowImageInfo',
		// 	description: 'This is the frontpage slideshow. First slideshow image should match the first slideshow image description, alternative text and photographer, second slideshow image should match the second slideshow image description, alternative text and photographer, and so on',
		// 	type: 'object',
		// 	fields: [
		// 	{
		// 		title: 'Slideshow image',
		// 		name: 'slideshowImage', 
		// 		type: 'array',
		// 		of: [
		// 			{
		// 			type: 'image',
		// 			to: {
		// 				type: 'slideshowImage'
		// 			}

		// 			}
		// 		]
		// 	},
		// 	{
		// 		title: 'Slideshow image description',
		// 		name: 'imageDescription', 
		// 		type: 'array',
		// 		of: [
		// 			{
		// 			type: 'text',
		// 			to: {
		// 				type: 'imageDescription'
		// 			}

		// 			}
		// 		]
		// 	},
		// 	{
		// 		title: 'Alternative image text',
		// 		name: 'altText', 
		// 		type: 'array',
		// 		of: [
		// 			{
		// 			type: 'text',
		// 			to: {
		// 				type: 'altText'
		// 			}

		// 			}
		// 		]
		// 	},
		// 	{
		// 		title: 'Photographer',
		// 		name: 'photographer', 
		// 		type: 'array',
		// 		of: [
		// 			{
		// 			type: 'string',
		// 			to: {
		// 				type: 'photographer'
		// 			}

		// 			}
		// 		]
		// 	}
		// 	]
			
		// },
		{
			title: 'Slideshow images',
			name: 'slideshowImages',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
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
							title: 'Alternative image description',
							name: 'altText',
							description: 'For accessibility. Keep it short and descriptive. Keep field blank if image is purely decorative',
							type: 'text'
						},
						{
							title: 'Photographer',
							name: 'photographer',
							type: 'string',
						}
					]
				}
			]

		},
		{
			title: 'Social media links',
			name: 'socialMediaLinks',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Name',
							name: 'name',
							type: 'string',
						},
						{
							title: 'URL',
							name: 'url',
							type: 'url',
						}
					]
				}
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