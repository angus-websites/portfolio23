import { createDirectus } from '@directus/sdk';
import { rest, readItem, readItems } from '@directus/sdk/rest';

export default defineNuxtPlugin((context) => {
	const directusURL = context.$config.DIRECTUS_HOST;
	const directus = createDirectus(directusURL).with(rest());

	return {
		provide: { directus, readItem, readItems },
	};
});
