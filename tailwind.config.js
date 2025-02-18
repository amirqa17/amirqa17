module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#18181B', // zinc-900
          light: '#FAFAFA'    // zinc-50
        },
        text: {
          DEFAULT: '#FAFAFA', // zinc-50
          light: '#18181B'    // zinc-900
        }
      }
    }
  }
} 