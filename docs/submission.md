## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!

### Task 1: Update form accessibility
This task mostly aims to make all the user interaction accessible via keyboard. I refactored the Wallet form to improve accessibility and semantics. Replaced divs with proper elements like `<fieldset>`, `<legend>`, and `<button>`, added aria-pressed and focus styles for keyboard and screen reader support, and normalized typography. If this was production code, I'd focus on adding form validation and error messaging for a more robust user experience.

[Click to View Pull Request on GitHub](https://github.com/shawncothran/react-ts-vite-budget/pull/1)

> 🗣 **Note:** Each `Task` will live in it's own PR that will be merged into `main` to easily distinguish code changes for each specific task.

### Task 2: Build UI based on wireframe
This one had me create a new `Budget` feature inspired by the provided wireframe, which includes:

- An accessible **budget summary** section displaying key metrics like income, allocated, and remaining budget.
- A dynamic **category list** integrated with a new `useCategories` hook for data management.
- A "New Category" button that toggles a form for creating custom budget categories with name, limit, and icon selection.
- Visual consistency by leveraging existing design tokens, typography, and layout breakpoints.
- Proper semantic and accessible markup with labels, aria attributes, and meaningful focus styles for better usability.

This addition aligns with the app's design principles and provides a starting point for future enhancements.

[Click to View Pull Request on GitHub](https://github.com/shawncothran/react-ts-vite-budget/pull/2)

### Task 3: Refactor to add visual hierarchy
This task focused on enhancing the `Transactions` component by:

- Transactions are now visually organized under a header for each month, improving UX, lovability and hierarchy.
- Added structured spacing, typography adjustments, and shadows for visual distinction between sections and items. **The hover state is built for interactivity, otherwise I wouldn't use a pointer cursor or shadow**
- Applied design tokens for consistency and ensured the component looks modern and aligns with the existing app aesthetic. **I don't love this design, as it feels dated, but it is relatively conservative and highly functional. Didn't want to burn too much time on it**
- Transaction dates are formatted in a more human format.

[Click to View Pull Request on GitHub](https://github.com/shawncothran/react-ts-vite-budget/pull/3)

### Notes:
<!-- space to ask questions or provide any additional details while going through this process -->
