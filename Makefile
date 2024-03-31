# Define the default target. When you just run `make`, this is what it will do.
.PHONY: all
all: install

# Install node modules
.PHONY: install
install:
	npm install

# Start the HTTP server
.PHONY: http-serve
http-serve:
	node server.js