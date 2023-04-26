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
		},
		{
						title: 'Main page title',
						name: 'mainPageTitle',
						type: 'string',
						description: 'E.g.: "Welcome to Planetary Records Café"'
					},
					{
						title: 'Slug',
						name: 'slug',
						type: 'slug',
						options: {
							source: 'mainPageTitle'
						}
					},
					{
						title: 'Description of the place',
						name: 'placeDescription',
						type: 'text',
						description: 'Write a short introduction',
					},
					{
						title: 'Main page slideshow images',
						name: 'mainPageSlideshow',
						description: 'First slideshow image should match the first slideshow image description and the first photographer name, second slideshow image should match the second slideshow image description and the second photographer, and so on',
						type: 'object',
						fields: [
							{
								title: 'Slideshow image',
								name: 'slideshowImage',
								type: 'array',
								of: [
									{
										type: 'image',
										to: {
											type: 'mainPageSlideshow'
										}
									},
			
								]
							},
							{
								title: 'Image description',
								name:	'imageDescription',
								description: 'Write a few lines about the image displayed in the slideshow',
								type:	'array',
								of: [
									{
										type: 'text',
										to: {
											type: 'imageDescription'
										}
									}
								]
							}
						]
					},
					{
						title: 'Slideshow image info',
						name: 'slideshowImageInfo',
						type: 'object',
						fields: [
						  {
							title: 'Slideshow image',
							name: 'slideshowImage', 
							type: 'array',
							of: [
								{
								type: 'image',
								to: {
									type: 'slideshowImage'
								}
			
								}
							]
						},
						  {
							title: 'Slideshow image description',
							name: 'imageDescription', 
							type: 'array',
							of: [
								{
								type: 'text',
								to: {
									type: 'imageDescription'
								}
			
								}
							]
						},
						  {
							title: 'Photographer',
							name: 'photographer', 
							type: 'array',
							of: [
								{
								type: 'string',
								to: {
									type: 'photographer'
								}
			
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