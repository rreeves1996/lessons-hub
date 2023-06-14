import Link from 'next/link';
import React from 'react';

export default function Home() {
	return (
		<main className='bg-gradient-radial from-sky-900 from-10% to-indigo-900 to-110% w-screen h-screen flex items-center'>
			<header className='text-center w-full text-indigo-100'>
				<Link
					href='/login'
					className='border-solid border-2 rounded-md border-indigo-100 text-indigo-100 px-3 py-1 text-lg  transition duration-150 ease-in-out hover:bg-indigo-100 hover:text-sky-900'>
					login
				</Link>

				<p className='text-indigo-100 text-opacity-90'>- or -</p>

				<Link
					href='/dashboard'
					className='text-indigo-100 text-decoration: underline underline-offset-1 hover:text-opacity-90'>
					create an account
				</Link>
			</header>
		</main>
	);
}
