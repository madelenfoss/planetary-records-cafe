// export default {
// 	title: 'Slideshow',
// 	name: 'slideshow',
// 	type: 'document',
// 	fields: [
// 		{
// 			title: 'Main page title',
// 			name: 'mainPageTitle',
// 			type: 'string',
// 			description: 'For example: "Welcome to..."'
// 		},
// 		{
// 			title: 'Slug',
// 			name: 'slug',
// 			type: 'slug',
// 			options: {
// 				source: 'mainPageTitle'
// 			}
// 		},
// 		{
// 			title: 'Description of the place',
// 			name: 'placeDescription',
// 			type: 'text',
// 			description: 'Write a few welcoming lines about the place',
// 		},
// 		// {
// 		// 	title: 'Main page slideshow images',
// 		// 	name: 'mainPageSlideshow',
// 		// 	description: 'First image should match first image description, second image should match second image description, and so on',
// 		// 	type: 'object',
// 		// 	fields: [
// 		// 		{
// 		// 			title: 'Slideshow image',
// 		// 			name: 'slideshowImage',
// 		// 			type: 'array',
// 		// 			of: [
// 		// 				{
// 		// 					type: 'image',
// 		// 					to: {
// 		// 						type: 'mainPageSlideshow'
// 		// 					}
// 		// 				},

// 		// 			]
// 		// 		},
// 		// 		{
// 		// 			title: 'Image description',
// 		// 			name:	'imageDescription',
// 		// 			type:	'array',
// 		// 			of: [
// 		// 				{
// 		// 					type: 'text',
// 		// 					to: {
// 		// 						type: 'imageDescription'
// 		// 					}
// 		// 				}
// 		// 			]
// 		// 		}
// 		// 	]
// 		// },
// 		{
// 			title: 'Slideshow image info',
// 			name: 'slideshowImageInfo',
// 			type: 'object',
// 			fields: [
// 			  {
// 				title: 'Slideshow image',
// 				name: 'slideshowImage', 
// 				type: 'array',
// 				of: [
// 					{
// 					type: 'image',
// 					to: {
// 						type: 'slideshowImage'
// 					}

// 					}
// 				]
// 			},
// 			  {
// 				title: 'Slideshow image description',
// 				name: 'imageDescription', 
// 				type: 'array',
// 				of: [
// 					{
// 					type: 'text',
// 					to: {
// 						type: 'imageDescription'
// 					}

// 					}
// 				]
// 			},
// 			  {
// 				title: 'Photographer',
// 				name: 'photographer', 
// 				type: 'array',
// 				of: [
// 					{
// 					type: 'string',
// 					to: {
// 						type: 'photographer'
// 					}

// 					}
// 				]
// 			}
// 			]
		 
// 		}



// 	]
// }