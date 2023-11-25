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
                darkBg: '#292930',
                border: 'rgba(245,245,245,0.08)',
                violet: '#6464F1',
                gray: '#9C9CB0',
                lightBg: '#303038',
                textWhite: '#F5F5F5',
                textGray: '#6B6B7B',
                textYellow: '#EFB62B',
                shadowStart: 'rgba(41, 41, 48, 0)',
                buttonBorder: 'rgba(245, 245, 245, 0.16)',
            },
            boxShadow: {
                main: '0px 4px 4px 0px rgba(0,0,0,0.25)',
                tab: '0px 4px 8px 0px rgba(103,100,241,0.16) inset',
                duties: '0px 4px 16px 0px rgba(0, 0, 0, 0.24)',
                button: '0px 4px 40px 0px rgba(104, 102, 234, 0.24)',
                card: '4px 8px 40px 0px rgba(0,0,0, 0.40)',
            },
            cursor: {
                grab: "url('/grab.png'), grab",
            },
        },
    },
    plugins: [],
};
export default config;
