install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	sudo npm publish --dry-run