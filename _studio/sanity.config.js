import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './structure/settings.js';
import shop from './structure/shop.js';

export default {
	title: 'Planetary Records Café',

	projectId: 'xsjf1afi',
	dataset: 'production',

	plugins: 
	[
		deskTool({
			title: 'Shop',
			name: 'shop',
			structure: shop
		}), 

		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}), 

		visionTool()
	],

	schema: {
		types: schemas,
	},
};
