# Physical File Organizer (MVP)

A simple web app to digitally organize and filter physical files by category, location, and tags.

This project was built as a **portfolio MVP** with a strong focus on clean component design, predictable UI behavior, and readable code.

---

## ✨ Features

- Add new files through a modal form
- Filter files by category, location, and tags
- Expandable / collapsible filter groups
- Loading and disabled states to prevent duplicate actions
- Clean, accessible UI using semantic HTML

---

## 🧠 Design Decisions

- **MVP-first approach**: Features were implemented end-to-end before cleanup or refactoring.
- **Component responsibility**: Components are split by _reason to change_, not size.
- **Semantic HTML**: Native elements like `<dialog>` and `<button>` are used for accessibility.
- **UI safety**: Interactive elements are disabled during loading and submit states to prevent inconsistent UI behavior.

---

## 🧱 Project Structure (High Level)

- Feature-based components (filters, add-file flow)
- Shared UI logic kept minimal
- No over-abstraction or premature reuse

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open your browser at the local development URL shown in the terminal.

---

## 🔮 Future Improvements

- Edit existing files
- Persist filters in local storage
- Keyboard navigation improvements
- Server-side validation and error handling

---

## 📌 Notes

This project intentionally avoids over-engineering. The goal was to demonstrate sound architectural judgment, clean UI logic, and readable React code rather than exhaustive features.

---

# AI Usage Policy

This project was developed with the assistance of AI tools (e.g., ChatGPT) as a **learning and productivity aid**, not as a replacement for understanding or decision-making.

## How AI is Used

AI tools may be used for:

- Generating initial scaffolding or boilerplate code
- Explaining unfamiliar APIs, language features, or patterns
- Suggesting alternative implementations or refactors
- Helping reason through bugs or edge cases
- Improving code readability and structure

## How AI is _Not_ Used

AI tools are **not** used to:

- Blindly copy and paste code without understanding it
- Bypass learning core concepts relevant to the project
- Replace architectural decisions or problem-solving
- Submit code I cannot explain, debug, or modify

## Responsibility & Understanding

For any AI-assisted code included in this project:

- I review the code line-by-line
- I can explain _why_ it exists and _how_ it works
- I adapt naming, structure, or logic to match my own mental model
- I am able to extend, refactor, or debug the code independently

## Learning Philosophy

AI is treated as:

- A **force multiplier**, not a crutch
- A faster way to learn industry patterns and best practices
- A tool to reduce time spent on mechanical work so more time can be spent on understanding systems, tradeoffs, and design decisions

This approach reflects how modern development teams operate, while maintaining personal accountability for the quality, correctness, and maintainability of the code.

---

## TL;DR

> This project uses AI tools responsibly for learning and productivity. All AI-assisted code is reviewed, understood, and modifiable by me. I use AI to move faster—not to avoid understanding.
