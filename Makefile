SHELL := /bin/bash

# Directories
FRONT_DIR := .
STUDIO_DIR := studio

# Commands
NPM := npm
NPX := npx

# Defaults
.PHONY: help
help:
	@echo ""
	@echo "Targets:"
	@echo "  make setup              Install deps (frontend + studio)"
	@echo "  make dev                Run frontend + studio (2 terminals recommended)"
	@echo "  make dev-front           Run Astro dev server"
	@echo "  make dev-studio          Run Sanity Studio dev server"
	@echo ""
	@echo "  make build              Build frontend"
	@echo "  make preview            Preview frontend build"
	@echo "  make build-studio        Build studio (static)"
	@echo ""
	@echo "  make lint               Run lint (if configured)"
	@echo "  make format             Run formatter (if configured)"
	@echo "  make typecheck          Run typecheck (if configured)"
	@echo ""
	@echo "  make clean              Remove build artifacts"
	@echo "  make clean-all          Remove node_modules + build artifacts"
	@echo ""
	@echo "  make vercel-link        Link project to Vercel (interactive)"
	@echo "  make vercel-env-pull    Pull env from Vercel -> .env.local"
	@echo "  make deploy-preview      Deploy to Vercel (preview)"
	@echo "  make deploy-prod         Deploy to Vercel (production)"
	@echo ""
	@echo "  make sanity-login       Sanity login"
	@echo "  make sanity-deploy       Deploy hosted Sanity Studio"
	@echo "  make sanity-export       Export dataset"
	@echo "  make sanity-import       Import dataset (needs file=...)"
	@echo ""

# ---------- Install / Setup ----------

.PHONY: setup setup-front setup-studio
setup: setup-front setup-studio

setup-front:
	$(NPM) install

setup-studio:
	cd $(STUDIO_DIR) && $(NPM) install

# ---------- Local dev ----------

# NOTE: "make dev" doesn't open two terminals automatically.
# Run in two shells:
#   shell1: make dev-front
#   shell2: make dev-studio
.PHONY: dev dev-front dev-studio
dev:
	@echo "Run in 2 terminals:"
	@echo "  make dev-front"
	@echo "  make dev-studio"

dev-front:
	$(NPM) run dev

dev-studio:
	cd $(STUDIO_DIR) && $(NPM) run dev

# ---------- Build / Preview ----------

.PHONY: build preview build-studio
build:
	$(NPM) run build

preview:
	$(NPM) run preview

build-studio:
	cd $(STUDIO_DIR) && $(NPM) run build

# ---------- Quality ----------

.PHONY: lint format typecheck
lint:
	$(NPM) run lint

format:
	$(NPM) run format

typecheck:
	$(NPM) run typecheck

# ---------- Cleaning ----------

.PHONY: clean clean-all
clean:
	rm -rf dist .astro
	rm -rf $(STUDIO_DIR)/dist $(STUDIO_DIR)/.sanity

clean-all: clean
	rm -rf node_modules
	rm -rf $(STUDIO_DIR)/node_modules

# ---------- Vercel deploy ----------

# Requires Vercel CLI: npm i -g vercel
.PHONY: vercel-link vercel-env-pull deploy-preview deploy-prod
vercel-link:
	vercel link

vercel-env-pull:
	vercel env pull .env.local

deploy-preview:
	vercel deploy

deploy-prod:
	vercel deploy --prod

# ---------- Sanity deploy / dataset ops ----------

# Requires Sanity CLI (usually installed in studio): npx sanity ...
.PHONY: sanity-login sanity-deploy sanity-export sanity-import

sanity-login:
	cd $(STUDIO_DIR) && $(NPX) sanity login

# Deploy hosted Sanity Studio (optional, if you want studio on sanity-hosted URL)
sanity-deploy:
	cd $(STUDIO_DIR) && $(NPX) sanity deploy

# Export dataset (set OUTPUT=... optional)
# Example: make sanity-export OUTPUT=./exports/production.tar.gz
sanity-export:
	@if [ -z "$(OUTPUT)" ]; then \
	  echo "Usage: make sanity-export OUTPUT=./exports/production.tar.gz"; \
	  exit 1; \
	fi
	cd $(STUDIO_DIR) && $(NPX) sanity dataset export production "$(OUTPUT)"

# Import dataset (set FILE=...)
# Example: make sanity-import FILE=./exports/production.tar.gz
sanity-import:
	@if [ -z "$(FILE)" ]; then \
	  echo "Usage: make sanity-import FILE=./exports/production.tar.gz"; \
	  exit 1; \
	fi
	cd $(STUDIO_DIR) && $(NPX) sanity dataset import "$(FILE)" production --replace
