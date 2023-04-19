import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';

export default {
	title: 'Studio',

	projectId: 'xsjf1afi',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemas,
	},
};
