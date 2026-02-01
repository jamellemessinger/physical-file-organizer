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
