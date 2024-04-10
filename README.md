# Scrollable Card List

A scrollable card list component for React.

## Installation

```bash
npm install scrollablecardlist
```

## Usage

### Step 1

Import the `ScrollableCardList` component and its styles:

```javascript
import { ScrollableCardList } from "scrollablecardlist";
import "scrollablecardlist/dist/index.css";
```

### Step 2

Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3

Configure Tailwind CSS in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 4

In your `index.css` file, include Tailwind CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5

Start your development server:

```bash
npm run dev
```

### Example

```javascript
import { ScrollableCardList } from "scrollablecardlist";
import "scrollablecardlist/dist/index.css";
const App = () => {
  return (
    //Can be used without cardData props as well
    <ScrollableCardList
      cardData={[
        {
          imageUrl: "",
          avatarImageUrl: "",
          titleText: "",
          subTitleText: "",
        },
        {
          imageUrl: "",
          avatarImageUrl: "",
          titleText: "",
          subTitleText: "",
        },
        {
          imageUrl: "",
          avatarImageUrl: "",
          titleText: "",
          subTitleText: "",
        },
      ]}
    />
  );
};

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
