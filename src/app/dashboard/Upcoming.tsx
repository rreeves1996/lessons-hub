'use client';
import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Stack,
	StackDivider,
	Box,
	Text,
	Button,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';

export default function Upcoming() {
	return (
		<Card>
			<CardHeader className='flex items-center'>
				<FaBell className='mr-2' />

				<Heading size='md'>Upcoming</Heading>
			</CardHeader>

			<CardBody>
				<Stack divider={<StackDivider />} spacing='2'>
					<Box>
						<Heading size='md' textTransform='uppercase'>
							6:30pm - 7:00pm
						</Heading>
					</Box>

					<Box>
						<Heading size='s' textTransform='uppercase'>
							Jim Bob - Guitar
						</Heading>

						<Text pt='2' fontSize='sm'>
							Contact Info
						</Text>

						<div className='mt-1 mb-2'>
							<Button size='xs' colorScheme='blue' variant='outline'>
								student info
							</Button>
						</div>
					</Box>

					<Box>
						<Heading size='s' textTransform='uppercase'>
							Notes
						</Heading>

						<Text pt='2' fontSize='sm'>
							Notes written by me asdkflaksjdkalsjdklasdjklasdklj aklsdjals
							dkjasjlkdjk askdjkalsd
						</Text>

						<div className='mt-1'>
							<Button size='xs' colorScheme='blue' variant='outline'>
								view full notes
							</Button>
						</div>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
}
