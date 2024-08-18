# Portfolio Page

[GitHub Repository](https://github.com/jricardogoulart/project-portifolio)

This is a web-based portfolio project built using Flask, a micro web framework for Python. The project showcases a personal portfolio with the ability to send emails directly from the website using Flask-Mail.

## Features

- **Responsive Design:** The portfolio is fully responsive and works on various devices.
- **Project Showcase:** Display your projects with descriptions, images, and links.
- **Contact Form:** Visitors can contact you directly via the website using the built-in form.
- **Email Integration:** Emails sent via the contact form are handled by Flask-Mail.

## Technologies Used

- **Flask:** The core web framework used to develop the application.
- **Python:** The programming language used to write the backend logic.
- **HTML5 & CSS3:** For the front-end design and layout.
- **Flask-Mail:** For handling email sending functionality.
- **Jinja2:** Templating engine for rendering dynamic content in HTML.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/jricardogoulart/project-portifolio.git
    cd project-portifolio
    ```

2. **Create a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your configuration settings, for example:

    ```
    FLASK_APP=app.py
    FLASK_ENV=development
    MAIL_SERVER=smtp.yourmailserver.com
    MAIL_PORT=587
    MAIL_USE_TLS=True
    MAIL_USERNAME=your-email@example.com
    MAIL_PASSWORD=your-email-password
    ```

5. **Run the application:**
    ```bash
    flask run
    ```

6. **Access the application:**
    Open your browser and go to `http://127.0.0.1:5000/`.

## Usage

- **Homepage:** Displays your personal information and project listings.
- **Projects Page:** Details of your projects with descriptions and images.
- **Contact Page:** Allows users to send you an email directly via the website.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any feedback is appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
