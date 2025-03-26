# Booking App Assignment

A **React Native (Expo)** application demonstrating a simple sign-in flow, room selection, and booking confirmation. This project was created as a **class assignment** to practice multi-screen navigation using **React Navigation** and basic state management with React Hooks.

---

## Overview

- **SignIn Screen**: Enter the username and password (`admin` / `admin`). If the credentials are valid, user is navigated to the Dashboard.
- **Dashboard Screen**: Allows the user to enter a Student ID, Name, Number of People, and pick a room from a list. Then they can **Check Availability** to go to the Booking screen.
- **Booking Screen**: Receives the inputs from the Dashboard and checks availability with a hard-coded rooms data array (capacity, availability). Displays a message whether the booking is confirmed or not.
- **Logout**: A header button on the Dashboard returns the user to the SignIn screen.

---

## Features

1. **Stack Navigation**  
   Powered by **@react-navigation/native** and **@react-navigation/native-stack**.
2. **State Management**  
   Uses **React Hooks** (e.g., `useState`) to store form data and manage component state.
3. **Form Handling**  
   Basic inputs for Student ID, Name, Number of People, plus a Picker for rooms.
4. **Styling**  
   Consistent look using React Native’s `StyleSheet`, with a color scheme that includes:
   - Background: `#F7F7F7`  
   - Borders: `#AAAE7F`  
   - Buttons: `#143109`

---

## Installation and Setup

1. **Clone or Download** this repository.
2. Run: **npm install** to install all dependencies.
3. Start the development server: npx expo start --tunnel
Press i (iOS) or a (Android) in the terminal to launch a simulator, or scan the QR code with Expo Go on a physical device.
