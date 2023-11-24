import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                background: "url('/background.png')",
            },
            colors: {
                mainBg: '#292930',
                border: 'rgba(245,245,245,0.08)',
                violet: '#6464F1',
                gray: '#9C9CB0',
                cardBg: '#303038',
                textWhite: '#F5F5F5',
                textGray: '#6B6B7B',
                textYellow: '#EFB62B',
            },
            boxShadow: {
                main: '0px 4px 4px 0px rgba(0,0,0,0.25)',
                active: '0px 4px 8px 0px rgba(103,100,241,0.16) inset',
            },
        },
    },
    plugins: [],
};
export default config;
