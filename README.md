# Student Registration Form

A modern, responsive, and accessible student registration form built with HTML, CSS, and JavaScript. It features live validation, a clean user interface, and a dynamic success modal.

![GitHub](https://img.shields.io/github/license/shahkaargul/RegForm) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

Interact with the live form here: [https://shahkaargul.github.io/RegForm/](https://shahkaargul.github.io/RegForm/)

## ✨ Features

- **Modern & Responsive UI:** Clean design that works flawlessly on desktops, tablets, and mobile devices.
- **Live Form Validation:** Real-time feedback on field input for:
  - Required fields
  - Email format
  - Password strength and confirmation matching
  - Phone number format
- **Interactive Elements:** Custom styled checkboxes, radio buttons, and dropdowns for a better user experience.
- **Success Modal:** A visually pleasing confirmation popup upon successful form submission.
- **Accessible Design:** Built with accessibility in mind, including proper ARIA labels and keyboard navigation.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Poppins)
- **Deployment:** GitHub Pages

## 📁 Project Structure
RegForm/
├── index.html # Main HTML structure of the form
├── style.css # All styling and responsive design rules
├── script.js # Form validation and modal functionality
├── images/
│ └── success.png # Icon used in the success modal
└── README.md # Project documentation (this file)


## 🚦 How to Use

1.  **Fill out the form fields:**
    - **Personal Details:** First Name, Last Name, Phone, Email.
    - **Account Details:** Username, Password, Confirm Password.
    - **Additional Info:** Select your Gender and Date of Birth from the dropdowns.
    - **Agreement:** Check the box to agree to the terms and conditions (required).

2.  **Receive Instant Feedback:**
    - Fields will highlight in red if there's an error (e.g., invalid email, passwords don't match).
    - Fields will highlight in green when correctly filled.

3.  **Submit:**
    - Click the "Register" button. If all validations pass, a success modal will appear.
    - Click "OK" on the modal to close it and reset the form.

## 🔧 Validation Rules

The form includes the following client-side validation rules:
- **First Name & Last Name:** Required, must be at least 2 characters long.
- **Phone Number:** Required, must be a valid 11-digit number (format: `03123456789`).
- **Email:** Required, must be a valid email format (e.g., `name@example.com`).
- **Username:** Required, must be at least 5 characters long.
- **Password:** Required, must be at least 8 characters long.
- **Confirm Password:** Required, must exactly match the password field.
- **Gender:** Required, must select one option.
- **Terms & Conditions:** Required, must be checked.

## 🖥️ Running Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shahkaargul/RegForm.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd RegForm
    ```
3.  **Open the `index.html` file in your web browser:**
    - You can simply double-click the file, or
    - Use a local server for the best experience (e.g., the Live Server extension in VSCode).

## 🔮 Future Enhancements

- [ ] **Backend Integration:** Connect the form to a server (e.g., Node.js, PHP, Firebase) to actually store the submitted data in a database.
- [ ] **Enhanced Password Strength Meter:** A visual indicator showing password strength (weak, medium, strong).
- [ ] **Form Persistence:** Save form data to `localStorage` so users don't lose progress if they accidentally refresh the page.
- [ ] **Additional Fields:** Add fields for profile picture upload, address, and course selection.
- [ ] **Loading State:** Add a loading spinner on the submit button while the form is "processing".

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shahkaargul/RegForm/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Shahkaar Gul**

- GitHub: [@shahkaargul](https://github.com/shahkaargul)
- Project Link: [https://github.com/shahkaargul/RegForm](https://github.com/shahkaargul/RegForm)

---

⭐️ If you found this project useful, please give it a star on GitHub!
