# Doctor Appointment Booking System

This Doctor Appointment Booking System is a simple web application implemented using JavaScript, HTML, and pure CSS. It leverages JSON-server for back-end simulation and handling HTTP requests, providing users with an intuitive platform to book appointments with their preferred doctors.

### Doctor Cards

![Doctors](https://github.com/GhazalBasalighe/Doctors-Appointment-Reservation/assets/127536254/480fd36b-2017-4887-a3b5-f76cb91e28ad)

### Booking Appointment

![Book Appointment](https://github.com/GhazalBasalighe/Doctors-Appointment-Reservation/assets/127536254/f32dbe9c-2b62-40e7-a41c-2e8dff282185)

## Features

- **Doctor Cards**: Browse through a list of available doctors and their profiles. Each doctor card displays essential information about the medical professional, making it easier for users to make informed choices.

- **Appointment Booking**: Select a doctor and click the "Make an Appointment" button to start the booking process. This action redirects you to a booking form page, where you can enter your information and select a suitable appointment date and time.

- **Data Persistence**: All appointment information is securely stored in a `db.json` file. This ensures that user bookings are preserved and can be accessed at any time.

- **Real-time Availability**: The system automatically updates the available appointment slots. Once an appointment is booked, the corresponding date and time are removed from the list of empty slots to prevent double bookings.

- **Seamless Experience**: After completing the booking, users are seamlessly redirected back to the doctor cards page, making the overall experience smooth and user-friendly.

## How It Works

1. **Doctor Selection**: Browse through the list of doctors and select the one you wish to make an appointment with.

2. **Booking Process**: Click the "Make an Appointment" button, and you'll be redirected to the booking form.

3. **Enter Information**: Fill in your personal details, including name, contact information, and any additional information required.

4. **Choose Appointment**: Select a date and time for your appointment based on the available slots.

5. **Confirmation**: Confirm your booking, and the system will save your appointment details.

6. **Availability Update**: The system automatically updates the available appointment slots, removing the date and time you just booked.

7. **Return to Doctor Cards**: After completing the booking, you'll be redirected back to the doctor cards page, where you can continue browsing or make additional appointments.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/your-username/doctor-appointment-system.git
   ```

2. Install the required dependencies.

   ```
   npm install
   ```

3. Start the JSON-server to simulate the back-end.

   ```
   npm run start
   ```

4. Open the project in your preferred web browser.

5. Start booking appointments with ease!

Feel free to contribute to this project or customize it according to your needs. We hope this Doctor Appointment Booking System streamlines the process of scheduling medical appointments and enhances the user experience.
