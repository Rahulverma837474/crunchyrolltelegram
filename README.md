---

# TelegramBot-Cruncyroll

A Telegram bot designed to verify Crunchyroll accounts.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/MAYKELL07/TelegramBot-Cruncyroll.git
   ```

2. Navigate to the project directory:
   ```
   cd TelegramBot-Cruncyroll
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

## Usage

1. Start the bot:
   ```
   npm start
   ```

2. Interact with the bot on Telegram.

## Configuration

- **Bot Token**: Ensure you replace the placeholder token in [main.ts](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/src/main.ts) with your actual bot token.

- **ESLint Configuration**: The project uses ESLint for linting. Configuration can be found in [.eslintrc.js](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/.eslintrc.js).

- **Prettier Configuration**: The project uses Prettier for code formatting. Configuration can be found in [.prettierrc](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/.prettierrc).

## Development

- **NestJS**: The bot is built using NestJS. Configuration for Nest CLI can be found in [nest-cli.json](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/nest-cli.json).

- **TypeScript Configuration**: The project is written in TypeScript. Configuration can be found in [tsconfig.json](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/tsconfig.json) and [tsconfig.build.json](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/tsconfig.build.json).

## Testing

- **Unit Tests**: Unit tests for the tasks service can be found in [tasks.service.spec.ts](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/src/tasks/tasks.service.spec.ts) and for the tasks controller in [tasks.controller.spec.ts](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/src/tasks/tasks.controller.spec.ts).

- **End-to-End Tests**: E2E tests can be found in [app.e2e-spec.ts](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/test/app.e2e-spec.ts).

- **Jest Configuration**: The project uses Jest for testing. Configuration can be found in [jest-e2e.json](https://github.com/MAYKELL07/TelegramBot-Cruncyroll/blob/main/test/jest-e2e.json).

## Contributing

Contributions are welcome! Please ensure you follow the coding standards set by ESLint and Prettier.

## License

---

**Note**: Ensure you keep sensitive information like bot tokens private and not hardcoded in the repository for security reasons.

---
