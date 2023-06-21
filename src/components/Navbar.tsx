'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
	const [collapsed, setCollapsed] = useState<boolean>(true);

	return (
		<nav className='w-full'>
			<div className='max-w-7xl mx-auto flex justify-between py-2 px-4'>
				<header>
					<h3 className='text-3xl'>lessonHUB</h3>
				</header>

				{/* <div>
					<button onClick={() => setCollapsed(!collapsed)}>
						<RxHamburgerMenu />
					</button>

					<ul className='flex flex-col gap-4 absolute'>
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
				</div> */}
			</div>
		</nav>
	);
}
