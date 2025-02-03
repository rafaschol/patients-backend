# Patients Backend

This project is the backend for the Patients application. Follow the instructions below to set up and run the project.
For the frontend part of this project, please refer to the [Patients Frontend repository](https://github.com/rafaschol/patients-frontend).

## Implementation Notes

- **IMPORTANT - about the usage of Docker:** I didn't include Dockerfile and docker-compose.yml files. The reason is, I configured the Docker files correctly with all three containers (DB, backend, and frontend) running. However, I had an error with the backend's connection to the DB. After debugging it for a while without success, and given the limited time I had, I decided to discard using Docker and instead wrote detailed instructions on how to set up the required projects manually.
- The project uses Express.js as server framework and Sequelize as the ORM for MySQL.
- Nodemailer is used for sending emails.
- The project structure follows the MVC pattern.
- Validations are defined in the Sequelize models and handled by it.
- Errors are and edge cases are handled appropriately.
- Use of environment variables to manage sensitive information securely.
- The project uses the Strategy pattern for handling different types of notifications.

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

- MySQL
- Having credentials for setting up the email server. See: [Mailtrap Email Testing](https://mailtrap.io/email-sending/).

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/rafaschol/patients-backend.git
    cd patients-backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

    Variables:
    - **DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME:** related to the MySQL server and database.
    - **EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD:** related to the mail server.

4. **Start the development server:**
    ```bash
    npm run dev
    ```
