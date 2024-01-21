(https://github.com/rahul25062002/TraxSmart/assets/75932347/d69ba912-922e-4897-9e29-331824ec730e)


![Screenshot from 2024-01-21 22-05-14](https://github.com/rahul25062002/TraxSmart/assets/75932347/84db6d62-e625-4f67-a49d-b41a262c5f51)

# Netlify link  --https://traxsmart.netlify.app/

# TraxSmart Form React Component

## Overview

This React component is designed as a progressive form that guides users through three stages: Personal Info, Address Info, and Account Setup. The form includes features such as a date picker, custom navigation buttons, and utilizes the `react-toastify` library for displaying error messages.

## Features

- **Progressive Stages:** The form is segmented into three stages for a step-by-step user experience.
  
- **Form Validation:** Input fields are validated at each stage to ensure mandatory information is provided and meets specified criteria.
  
- **Toast Notifications:** Error messages are displayed using toast notifications from the `react-toastify` library.

## Usage
1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/progressive-form.git
    ```

2. Change into the project directory:

    ```bash
    cd traxSmart
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Install dependencies:

    ```bash
    npm install react-tailwindcss-datepicker react-toastify
    ```

5. Import the `ProgressiveForm` component into your project:

    ```jsx
    import ProgressiveForm from './ProgressiveForm';

    function App() {
      return (
        <div>
          <ProgressiveForm />
        </div>
      );
    }

    export default App;
    ```

## Components

### 1. PersonalInfo

This component handles the collection of personal information, including full name, email address, and date of birth.

### 2. AddressInfo

This component gathers address-related information, including street address, city, state, and zip code.

### 3. Account

The Account component manages the account setup, handling username, password, and password confirmation. It also facilitates the transition between form stages.

## Styling

The form utilizes Tailwind CSS for styling, resulting in a clean and responsive design. Custom styles are applied for form validation and the progress bar.

## Form Validation

Form validation is implemented for each stage to ensure that mandatory fields are filled, and input criteria are met. Error messages are displayed through toast notifications.

## Progress Indicator

A visual progress indicator is included at the top of the form, indicating the current stage and allowing users to navigate between stages.

## Event Handlers

Event handlers are implemented for input changes, bringing labels outside the input box when focused and returning them inside when blurred.

## Author

[Your Name]

## License

This project is licensed under the [MIT License](LICENSE.md).

Feel free to customize the component to fit your specific needs and styling preferences. If you encounter any issues or have suggestions for improvements, please open an issue or create a pull request.
