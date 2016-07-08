init:
	npm install
	gulp
	serve -p 3000

start:
	open http:/localhost:3000
	gulp watch
