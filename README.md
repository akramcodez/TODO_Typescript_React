# TODO App (React + TypeScript)

This is a simple and clean **TODO List Application** built with **React**, **TypeScript**, **TailwindCSS**, and **Zustand** for state management.  
It allows users to **add**, **complete**, **delete**, and **filter** todos based on their status (active or completed).

---

## ✨ Features

- 📝 Add New Todos
- ✅ Mark Todos as Completed
- 🗑️ Delete Completed Todos
- 🔍 Filter Todos (All, Active, Completed)
- 💾 Persist Todos using Local Storage
- ⚡ Built with TypeScript for type safety
- 🎨 Styled with TailwindCSS

---

## 📂 Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Form.tsx      # Form to add new todos
│   │   ├── Todos.tsx     # List and manage todos
│   ├── store/
│   │   └── todos.ts      # Zustand store for todos
│   ├── App.tsx           # Main app layout
│   ├── main.tsx          # Entry point
│   └── index.css         # TailwindCSS styles
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/akramcodez/TODO_Typescript_React.git
```

2. **Install dependencies**

```bash
npm install
```
or
```bash
yarn
```

3. **Run the app**

```bash
npm run dev
```
or
```bash
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser!

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Vite](https://vitejs.dev/)

---

## 📸 Screenshots

| Add Todos | Filter Todos |
|:---------:|:------------:|
| ![Add Todos](https://via.placeholder.com/300x200?text=Add+Todos) | ![Filter Todos](https://via.placeholder.com/300x200?text=Filter+Todos) |

*(You can replace the above placeholder links with real screenshots later)*

---

## 🧠 How Filtering Works

- The app uses React Router's `useSearchParams` to read URL query parameters.
- Based on the value (`all`, `active`, `completed`), it filters which todos to show.
- Example:
  - `/` → All todos
  - `/?todos=active` → Only active todos
  - `/?todos=completed` → Only completed todos

---

## 🙋 Author

Made with ❤️ by [**@akramcodez**](https://github.com/akramcodez)

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share!

---

## 🎯 Quick Start

```bash
git clone https://github.com/akramcodez/TODO_Typescript_React.git && cd TODO_Typescript_React && npm install && npm run dev
```
