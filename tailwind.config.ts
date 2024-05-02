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
        rootSize: '6.4rem',
        navSize: '2.4rem',
        inputSize: '1.9rem',
        trendSize: '2rem',
      },
      width: {
        buttonWidth: '400px',
        formWidth: '400px',
        inputWidth: '220px',
        formTitleWidth: '110px',
        contentsWidth: '850px',
        navWidth: '170px',
        liWidth: '160px',
        searchWidth: '315px',
      },
      height: {
        buttonHeight: '60px',
        formHeight: '380px',
        inputHeight: '30px',
        headerHeight: '55px',
        searchHeight: '35px',
        searchInputHeight: '20px',
        trendHeight: '300px',
      },
      lineHeight: {
        searchInput: '20px',
      },
      backgroundColor: {
        lightBrown: '#EDD2B4',
        brown: '#D0A97E',
        modal: 'rgba(24, 24, 27,0.5)',
        lightBrownTP: 'rgba(237, 210, 180, 0.52)',
        lightGray: '#E0E0E0',
      },
      borderRadius: {
        radius10: '10px',
        radius15: '15px',
        radius20: '20px',
        radiusCircle: '50%',
      },
      borderWidth: {
        '1': '1px',
      },
      margin: {
        form: '50px',
        input: '15px',
        formTitle: '25px 5px',
        nav: '36px',
        li: '27px',
        '100px': '100px',
        '64px': '64px',
      },
      padding: {
        input: '30px',
        back: '6px',
        nav: '95px',
        right: '10px',
        padding15: '15px',
      },
      borderColor: {
        brown: '#D0A97E',
        lightBrownTP: 'rgba(237, 210, 180, 0.52)',
      },
      spacing: {
        '12px': '12px',
        '8px': '8px',
      },
      boxShadow: {
        buttonShadow: '0 0px 10px 5px rgba(237,210,180,0.5)',
      },
      opacity: {
        lightBrown: '52%',
      },
    },
  },
  plugins: [],
};
export default config;
