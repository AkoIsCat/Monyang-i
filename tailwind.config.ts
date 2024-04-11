import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        rootSize: '64px',
      },
      width: {
        buttonWidth: '285px',
        formWidth: '335px',
        inputWidth: '175px',
        formTitleWidth: '85px',
      },
      height: {
        buttonHeight: '60px',
        formHeight: '295px',
        inputHeight: '30px'
      },
      backgroundColor: {
        lightBrown: '#EDD2B4',
        brown: '#D0A97E',
      },
      borderRadius: {
        radius10: '10px',
        radius20: '20px',
      },
      margin: {
        form: '50px',
        input: '15px',
        formTitle: '5px',
      },
      padding: {
        input: '30px',
      },
      borderColor: {
        brown: '#D0A97E',
      },
    },
  },
  plugins: [],
};
export default config;
