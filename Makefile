build:
	@bun x sass style:style
	@bun x vite build --config vite.config.lib.ts
	@bun x tsc -p tsconfig-types.json
#	@bun x typedoc --out typedoc --exclude \"**/demo/**/*.tsx\" --excludeInternal --disableSources --excludePrivate --excludeProtected --readme none ./src

test:
	@bun x vitest

test_e2e:
	@playwright test --ui
