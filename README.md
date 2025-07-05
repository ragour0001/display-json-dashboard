# MVP Web UI - Vite + React + ShadCN

This project has been successfully converted from Create React App to a modern Vite + React + ShadCN setup.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
mvp-web-ui/
├── src/
│   ├── components/          # Reusable UI components
│   ├── features/           # Feature-based modules
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # ShadCN utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets
├── components.json         # ShadCN configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🛠 Technology Stack

- **Build Tool:** Vite
- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN/UI (Radix UI primitives)
- **Routing:** React Router DOM
- **State Management:** React Query (TanStack Query)
- **Form Handling:** React Hook Form + Zod validation

## 🎨 Adding ShadCN Components

To add new ShadCN components to your project:

```bash
# Add a button component
npx shadcn@latest add button

# Add a form component
npx shadcn@latest add form

# Add an input component
npx shadcn@latest add input

# Add a dialog component
npx shadcn@latest add dialog
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔄 Migration Notes

### What was changed:
- ✅ Migrated from Create React App to Vite
- ✅ Updated to modern React 18 patterns
- ✅ Replaced custom CSS with Tailwind CSS
- ✅ Added ShadCN/UI component system
- ✅ Updated TypeScript configuration
- ✅ Added modern ESLint configuration
- ✅ Removed deprecated dependencies

### What needs to be updated:
- 🔄 Uncomment and update existing components in `App.tsx`
- 🔄 Convert styled-components to Tailwind CSS classes
- 🔄 Update component imports and exports
- 🔄 Replace old UI components with ShadCN components
- 🔄 Update any absolute imports to use the `@/` alias

## 🎯 Next Steps

1. **Uncomment your existing routes** in `src/App.tsx`
2. **Update component imports** to use the new structure
3. **Convert styling** from styled-components/SCSS to Tailwind CSS
4. **Add ShadCN components** as needed for your UI
5. **Update any API calls** to use modern patterns
6. **Test all functionality** to ensure everything works correctly

## 🐛 Troubleshooting

### Common Issues:

1. **Import errors:** Update import paths to use the `@/` alias
2. **Styling issues:** Convert old CSS classes to Tailwind utilities
3. **Component errors:** Replace old UI components with ShadCN equivalents

### Getting Help:

- [Vite Documentation](https://vitejs.dev/)
- [ShadCN/UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)

## 📦 Dependencies

### Core Dependencies:
- React & React DOM
- React Router DOM
- TanStack React Query
- React Hook Form
- Zod (validation)
- Tailwind CSS
- ShadCN/UI components

### Development Dependencies:
- Vite
- TypeScript
- ESLint
- Tailwind CSS
- PostCSS
- Autoprefixer

---

Happy coding! 🎉
