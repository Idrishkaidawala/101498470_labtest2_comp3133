# SpaceX Mission Explorer

## Description
This is an Angular application built to explore and filter SpaceX missions utilizing the public SpaceX API. It provides an intuitive interface to browse past launches and find specific mission details along with relevant resources, patches, and videos. This project highlights modern Angular usage features like Signals, new control flow syntax (`@if`, `@for`, `@switch`), and Reactive Forms.

## Features Implemented
- **Mission List:** Displays all SpaceX missions showing flight number, mission name, launch year, patch image, rocket info, and external links.
- **Mission Filter:** A reactive form that allows finding and filtering missions exactly by their launch year.
- **Mission Details:** A detailed view for a single mission showing more in-depth data about rockets, versions (using `@switch`), and mission description.
- **Modern Angular Tooling:** Utilizes Angular `signal` for state management, Standalone Components, built-in common modules, and Angular Material design for an aesthetic UI.
- **Routing:** Navigates between All Missions, Filter Missions, and Mission Details natively.

## Screenshots

*(Students: Replace the images below with actual screenshots before submitting)*

### 1. Home / Mission List
![Running application](screenshots/mission-list.png)
*Description: The main page displaying a grid of mission cards fetched directly from the SpaceX API, featuring patch images, titles, and direct external links.*

### 2. Output UI / Filter Form
![Output UI](screenshots/mission-filter.png)
*Description: The search component utilizing Reactive Forms to filter the launch array by a specific launch year. Submitting valid form triggers a filter API call matching the results.*

### 3. Mission Details / Code Walkthrough Component
![Code components](screenshots/mission-details.png)
*Description: A detailed view passing state via route parameters, containing the payload information using control flow such as `@switch` to color-code rocket generation.*

## Instructions to Run the Project

### Prerequisites
Make sure you have Node Package Manager (npm) and Node.js installed properly on your machine.

### Installation & Serving
1. Clone this repository locally.
2. Navigate into the application directory:
   ```bash
   cd 101498470-lab-test2-comp3133
   ```
3. Install package dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200/`.

## Author
Developed by student `101498470` for COMP3133 Lab Test 2 Version 2a.
