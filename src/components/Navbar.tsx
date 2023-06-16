import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<nav className='w-full'>
			<div className='max-w-7xl mx-auto flex justify-between py-2 px-4'>
				<header>
					<h3 className='text-3xl'>lessonHUB</h3>
				</header>
				<ul className='flex flex-col gap-4'>
					<li>
						<Link href='/dashboard'>Home</Link>
					</li>
					<li>
						<Link href='/dashboard'>Students</Link>
					</li>
					<li>
						<Link href='/dashboard'>Schedule</Link>
					</li>
					<li>
						<Link href='/dashboard'>My Account</Link>
					</li>
					<li>
						<Link href='/dashboard'>Logout</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
