import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './structure/settings.js';
import shopItems from './schemas/documents/shopItems.js';

export default {
	title: 'Planetary Records Café',

	projectId: 'xsjf1afi',
	dataset: 'production',

	plugins: 
	[
		deskTool({
			title: 'Shop',
			name: 'shop',
			structure: shopItems
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
