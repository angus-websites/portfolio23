import { createDirectus } from '@directus/sdk';
import { rest, readItem, readItems } from '@directus/sdk/rest';

const directus = createDirectus('http://localhost:8055').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});