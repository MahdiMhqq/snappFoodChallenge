# Snapp Food Code Challenge

Welcome to the Snapp Food Code Challenge repository! This project showcases a React.js application built with TypeScript, Redux Toolkit and SASS.

### Preview Link

### NOTICE: Turn off your VPN/PROXY before visit
**[PREVIEW](https://snappfood.darkube.app/)**

### Main Technologies

The project is primarily built using the following technologies:

- React.js
- TypeScript
- Redux Toolkit
- SASS

### Features

:white_check_mark: **1. Vendors Virtual List**:
Utilizing the [react-window](https://react-window.vercel.app/) library, i have implemented a virtual list for vendors. This ensures efficient rendering of long lists, resulting in a smooth user experience.

:white_check_mark: **2. Vendor Card with Pixel Perfect Match**:
The vendor card in this application has been implement to achieve a pixel-perfect match with the main website.

:white_check_mark: **3. Infinite Scroll**:
I have implemented the `Intersection Observer` API to achieve infinite scroll functionality. Users can effortlessly load more content as they scroll through the vendor list.

:white_check_mark: **4. BEM Methodology for SASS**:
To maintain a clean and organized codebase, i have adopted the Block Element Modifier (BEM) methodology for naming SASS modules classNames.

:white_check_mark: **5. AsyncThunk and Axios for Data Fetching**:
I utilize `AsyncThunk` and `Axios` for fetching data, ensuring smooth data retrieval from the server. Additionally, i have implemented Request Interceptors to add some headers to requests.

:white_check_mark: **6. Lazy Loading for Images**:
To optimize website loading times, i have implemented lazy loading for images. Furthermore, i have added image placeholders to enhance user experience.

:white_check_mark: **7. CRACO for Global SASS Helpers**:
I have incorporated CRACO into the project to make some SASS helpers available globally in the .module.scss files across the entire project.

### Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/MahdiMhqq/snappFoodChallenge.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start`
4. Open your browser and visit: `http://localhost:3000`
