import { Providers } from './providers';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
				className={`${inter.className} bg-gradient-radial from-sky-800 from-10% to-indigo-800 to-110% text-indigo-100 w-screen h-screen flex flex-col items-center`}>
				<Providers>
					<Navbar />
					<main className='mb-auto w-full max-w-7xl'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
