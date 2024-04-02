![Badge](https://img.shields.io/badge/License-MIT-yellow.svg) ![HTML](https://img.shields.io/badge/HTML-blue) ![CSS](https://img.shields.io/badge/CSS-red) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

<h1 align = "center"> Password Generator </h1>

In today's digital age, where employees frequently handle sensitive data, the importance of robust security measures cannot be overstated. One fundamental aspect of securing data is the creation of strong, hard-to-crack passwords. To address this need, a solution has been designed that allows employees to generate random passwords that adhere to specific, customisable criteria. This system ensures that users can create a password that not only meets a set of defined standards, including length and character type, but also enhances the overall security of the data they access. By integrating a user-friendly interface that prompts the employee to select their preferred criteria and validates their choices, the process culminates in the generation of a password tailored to the user's security needs, significantly bolstering data protection efforts.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Video](#video)
- [Output](#output)
- [Installation](#installation)
- [Central Grader Comments](#central-grader-comments)
- [License](#license)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Technologies Used

- HTML
- CSS
- JavaScript

## Video

![](assets/videos/Password-Generator-Video.gif)

## Output

Initiating password creation involves clicking the "Generate Password" button. This action prompts a pop-up window requesting the desired password length, which must be a numeric value between 8 and 128 characters.

If the user clicks "Cancel", it closes the window pop-up.

If the user enters a non-numeric input, another window pop-up informs them "Must input a value". The length selection prompts reappears, allowing the user to retry.

If the user enters a numeric input outside of 8-128, another window pop-up informs them "The password length must be between 8 and 128 characters". The length selection prompts reappears, allowing the user to retry.

Upon entering a valid password length, a series of four pop-ups appear, each asking whether to include lowercase letters, uppercase letters, numbers, or special characters in the generated password. Clicking "Yes" for at least one option is mandatory; selecting "No" for all options will have another window pop-up informing them "You must choose at least one option" and returns to the initial password length prompt.

Once at least one inclusion option is chosen, a password is generated based on the selected criteria and displayed to the user.

## Installation

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/Password-Generator](https://github.com/yukitoshi12345/Password-Generator)

You can access the deployed application with the GitHub Pages link:
[https://yukitoshi12345.github.io/Password-Generator/](https://yukitoshi12345.github.io/Password-Generator/)

## Central Grader Comments

Grade: 100/100

Excellent job on the Password Generator Challenge! Upon launching your application the browser loads smoothly and without errors. The user is then presented with a mobile responsive UI where they can select to generate a random password based on their responses in the prompt windows. The user then has the option to select a character length and character types including uppercase, lowercase, numerical and special. Followed by their generated password being displayed in the UI for them to use. I have to say how impressed I am to see you build upon the skills you acquired so far to create a fully functioning javascript application.

You created a unique name for your repository avoiding words like 'challenge', ‘homework’ or ‘assignment’, and you were able to follow best practices for file structure and naming conventions. In the same respect, you were able to follow proper coding conventions with indentation and overall structure. You were able to show your work, with multiple descriptive commits, and your repository contains a quality README file that includes a brief description, a screenshot offering a preview of your application and a link to the deployed site. Overall great job.

- Sam, Centralized Grading.

## License

This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/Password-Generator/blob/main/LICENSE).
