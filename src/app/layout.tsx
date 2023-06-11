import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'lessonsHUB',
	description: 'Lesson Helper',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gradient-radial from-sky-900 from-10% to-indigo-900 to-110% text-indigo-100 w-screen h-screen flex flex-col items-center `}>
				{children}
			</body>
		</html>
	);
}