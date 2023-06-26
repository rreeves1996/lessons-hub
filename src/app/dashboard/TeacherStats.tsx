import React from 'react';

export default function TeacherStats() {
	return (
		<div className='w-full text-center'>
			<header className='py-2'>
				<h2 className='text-4xl'>Welcome back!</h2>
				<h4 className='text-lg'>{`Here's how you're doing...`}</h4>
			</header>

			<section className='p-4 flex'>
				<div className='flex flex-col items-center text-center w-full'>
					<h6 className='text-sm uppercase w-32'>Parent Satisfaction</h6>
					<h2 className='text-4xl py-2 ml-2'>98%</h2>
				</div>
				<div className='flex flex-col items-center text-center w-full'>
					<h6 className='text-sm uppercase w-32'>Student Satisfaction</h6>
					<h2 className='text-4xl py-2 ml-2'>95%</h2>
				</div>
			</section>
		</div>
	);
}
