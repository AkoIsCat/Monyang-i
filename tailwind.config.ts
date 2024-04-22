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
        buttonWidth: '400px',
        formWidth: '400px',
        inputWidth: '220px',
        formTitleWidth: '110px',
      },
      height: {
        buttonHeight: '60px',
        formHeight: '380px',
        inputHeight: '30px',
        headerHeight: '55px',
      },
      backgroundColor: {
        lightBrown: '#EDD2B4',
        brown: '#D0A97E',
        modal: 'rgba(24, 24, 27,0.5)',
      },
      borderRadius: {
        radius10: '10px',
        radius20: '20px',
      },
      margin: {
        form: '50px',
        input: '15px',
        formTitle: '25px 5px',
      },
      padding: {
        input: '30px',
        back: '6px',
      },
      borderColor: {
        brown: '#D0A97E',
      },
      spacing: {
        '12px': '12px',
        '8px': '8px',
      },
      boxShadow: {
        buttonShadow: '0 0px 10px 5px rgba(237,210,180,0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
