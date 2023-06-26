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
		<Card bg='whiteAlpha.900'>
			<CardHeader className='flex items-center'>
				<FaBell className='mr-2' />

				<Heading size='md'>Upcoming</Heading>
			</CardHeader>

			<CardBody pt='0'>
				<Stack divider={<StackDivider />} spacing='2'>
					<Box>
						<Heading size='md' textTransform='uppercase' mb='1'>
							Jim Bob - Guitar
						</Heading>

						<Heading size='sm' textTransform='uppercase' mb='1'>
							6:30pm - 7:00pm
						</Heading>

						<Text fontSize='sm'>Contact Info</Text>

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
