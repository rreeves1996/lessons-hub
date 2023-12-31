import React from 'react';
import Upcoming from './Upcoming';
import TeacherStats from './TeacherStats';

export default function Dashboard() {
	return (
		<>
			<header className='w-full flex flex-col md:flex-row'>
				<div className='w-full flex justify-center'>
					<TeacherStats />
				</div>

				<div className='w-full flex justify-center'>
					<Upcoming />
				</div>
			</header>
		</>
	);
}
