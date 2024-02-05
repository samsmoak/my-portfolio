/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				small: "700px",
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "950px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			width: {
				small: "700px",
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "950px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			colors: {
				mamba: {
					100: "#343434",
				},
				orangy: {
					100: "#FFAD9C",
					200: "#EEEDE7",
				},
				paper: {
					100: "#FEFEFE",
					200: "#F9F4ED",
					300: "#F6EFE4",
					400: "#F3E9DB",
					500: "#F0E4D3",
					600: "#ECDFCA",
					700: "#E9D9C1",
					800: "#E6D4B8",
				},
				greener: {
					100: "#F5F9ED",
					200: "#ECF3DC",
					300: "#D9E6B9",
					400: "#C5DA95",
					500: "#BCD484",
					600: "#9FC14F",
					700: "#5F742F",
					800: "#404D20",
				},
				ShaBlue: {
					100: "#b5d4fc",
					200: "#84b7fb",
					300: "#529af9",
					400: "#217df7",
					500: "#0863de",
					600: "#064dad",
					700: "#04377b",
					800: "#03214a",
				},
				ShaBlue2: {
					100: "#4d668f",

					200: "#263A58",
					300: "#12294A",
					400: "#0F2647",
					600: "#021A3A",
					700: "#193157",
				},
			},
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				display: ["Lobster", "cursive"],
				redressed: ["Redressed", "cursive"],
				shizuru: ["Shizuru", "cursive"],
				body: ['"Open Sans"'],
				ArchitectDaughter: ["Architects Daughter", "cursive"],
				Yanone_Kaffeesatz: ["Yanone Kaffeesatz", "sans-serif"],
				Roboto: ["Roboto", "sans-serif"],
			},

			borderRadius: {
				"6xl": "40px",
			},
			keyframes: {
				wiggle: {
					"0%": { transform: "translateX(900px)" },
					"100%": { transform: "translateX(-900px)" },
				},
				wiggle2: {
					"0%": { transform: "translateX(600px)" },
					"100%": { transform: "translateX(-550px )" },
				},
			},
		},
		screens: {
			xs: "400px", // Below 400px
			sm: "500px", // 500px - 767px
			md: "768px", // 768px - 990px  2
			lg: "992px", // 991px - 1279px 3
			xl: "1280px", // 1280px and up 4
			xxl: "3440px",
		},
		backgroundImage: {
			beetle:
				"url('https://cdn.pixabay.com/photo/2024/01/19/18/00/hydrangeas-8519528_1280.jpg')",
		},
	},
	plugins: [],
};
