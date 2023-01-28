/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
            'nft': "url('/src/Assets/background.jpg')",
        }
      },
    },
    plugins: [],
  }
  
