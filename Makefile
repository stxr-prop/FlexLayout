build:
	@bun x sass style:style
	@bun x vite build --config vite.config.lib.ts

test:
	@bun x vitest

test_e2e:
	@playwright test --ui
