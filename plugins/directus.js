import { createDirectus } from '@directus/sdk';
import { rest, readItem, readItems } from '@directus/sdk/rest';

export default defineNuxtPlugin((context) => {
	console.log(context.$config)
	const directusURL = context.$config.DIRECTUS_HOST || "http://localhost:8055";
	const directus = createDirectus(directusURL).with(rest());
	console.log("Using directus host: "+directusURL)
	return {
		provide: { directus, readItem, readItems },
	};
});
