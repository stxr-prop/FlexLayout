build:
	@pnpm exec sass style:style
	@pnpm exec vite build --config vite.config.lib.ts
	@pnpm exec tsc -p tsconfig-types.json
#	@bun x typedoc --out typedoc --exclude \"**/demo/**/*.tsx\" --excludeInternal --disableSources --excludePrivate --excludeProtected --readme none ./src

types:
	@pnpm exec tsc -p tsconfig-types.json

.PHONY: types

test:
	@pnpm exec vitest

test_e2e:
	@playwright test --ui
