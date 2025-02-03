# Patients Backend

This project is the backend for the Patients application. Follow the instructions below to set up and run the project.
For the frontend part of this project, please refer to the [Patients Frontend repository](https://github.com/rafaschol/patients-frontend).

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
