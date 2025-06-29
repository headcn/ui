# Contributing to headcn/ui

Thanks for your interest in contributing to **headcn/ui**. We're happy to have you here.

We welcome contributions! Whether it's fixing bugs, improving documentation, or adding new components, you're helping make this project better for everyone.

## Tech Stack

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Getting Started

1. **Fork the repository** and clone your fork:
   ```sh
   git clone https://github.com/YOUR_USERNAME/ui.git
   cd ui
   ```

2. **Install dependencies** using `pnpm`:
   ```sh
   pnpm install
   ```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `ui.headcn.site` website:

```bash
pnpm --filter=www dev
# or
pnpm www:dev
```

## Project Structure

This repository is structured as follows:

```
apps
└── www
    ├── app
    ├── components
    ├── content
    └── registry
        ├── examples
        └── ui
packages
└── headcn
```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `apps/www/app`        | The Next.js application for the website. |
| `packages/headcn`     | The `headcn` cli package.                |


## How to Contribute

### 1. Create a Feature or Bugfix Branch

```sh
git checkout -b feat/something-new
```

### 2. Commit and Push

```sh
git add .
git commit -m "feat(button): add outline variant"
git push origin feat/button-variant
```

### 3. Open a Pull Request

Go to your fork and submit a pull request to the `main` branch.  
Your PR will be reviewed, and once approved, the changeset will be included in the next release.

## Guidelines

- Follow the existing **coding style**
- Keep PRs **focused and minimal**
- Use **semantic commit messages** (e.g., `feat:`, `fix:`, `docs:`)
- If you're unsure, open an issue or draft PR for feedback early!

## Questions?

Feel free to open a [GitHub issue](https://github.com/headcn/ui/issues) or start a discussion.  
Thanks for being awesome! 🚀
