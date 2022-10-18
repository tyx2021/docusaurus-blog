// Homepage/Landing Page
import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AOS from 'aos';


export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Tyx's Blog">
			<Homepage />
		</Layout>
	);
}


const Homepage = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<div className='flex flex-col items-center justify-center pt-8 pb-10'>
			<img
				alt='logo'
				className='inline object-cover w-60 h-60 mr-2 rounded-full mb-5'
				src='https://avatars.githubusercontent.com/u/100410307?v=4'
			/>
			<h1 className='text-4xl font-bold text-center'>Tyx2021</h1>
			<div
				data-aos='fade-up'
				className='p-10 rounded-lg items-center max-w-4xl mt-10 sm:w-full dark:bg-slate-800 bg-slate-300 shadow-2xl'
			>
				<h4 className='text-3xl font-bold italic mb-4 text-center'>About Me</h4>
				<p className='my-5 text-left'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan egestas facilisis. Nullam auctor tortor a enim pharetra sagittis. Integer odio dui, venenatis et dignissim sit amet, vulputate a lorem. Etiam tempor augue a mi scelerisque, ut volutpat erat ornare. Nulla et placerat libero. Quisque sed ornare est. Duis commodo sit amet orci in facilisis. Praesent volutpat vehicula nunc, non suscipit quam interdum vel. Donec auctor ornare nunc commodo efficitur. Cras sodales erat dictum orci porta, id imperdiet libero auctor. Donec condimentum consectetur ipsum at cursus. Phasellus facilisis erat non nulla tincidunt laoreet. Vivamus urna justo, lobortis sit amet fringilla ut, sollicitudin nec odio. Aliquam metus nibh, venenatis in lorem at, varius sodales ex.
				</p>
			</div>
			<div
				data-aos='fade-up-left'
				className='p-10 rounded-lg items-center max-w-4xl mt-10 sm:w-full dark:bg-slate-800 bg-slate-300 shadow-2xl'
			>
				<h4 className='text-3xl font-bold italic mb-4 text-center'>Hobbies</h4>
				<p className='my-5 text-left'>
					Mi tempus imperdiet nulla malesuada pellentesque elit. Ipsum faucibus vitae aliquet nec. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Dolor sed viverra ipsum nunc aliquet bibendum enim. Augue neque gravida in fermentum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Nam aliquam sem et tortor consequat id porta nibh. Vitae tempus quam pellentesque nec nam aliquam. Porta lorem mollis aliquam ut porttitor leo a diam. Aliquam faucibus purus in massa.				</p>
			</div>
			<div
				data-aos='zoom-in-up'
				className='p-10 rounded-lg items-center max-w-4xl mt-10 sm:w-full dark:bg-slate-800 bg-slate-300 shadow-2xl'
			>
				<h4 className='text-3xl font-bold italic mb-4 text-center'>Others</h4>
				<p className='my-5 text-left'>
					Aliquam sem fringilla ut morbi tincidunt augue. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sed vulputate odio ut enim blandit volutpat maecenas. Elit ut aliquam purus sit amet luctus venenatis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Lectus proin nibh nisl condimentum id venenatis a condimentum. Scelerisque purus semper eget duis at tellus at urna. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ipsum consequat nisl vel pretium lectus quam. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Nunc eget lorem dolor sed viverra. Rhoncus mattis rhoncus urna neque viverra. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Leo duis ut diam quam nulla porttitor. Turpis egestas sed tempus urna. Velit scelerisque in dictum non consectetur a erat. Pellentesque diam volutpat commodo sed egestas egestas.
				</p>
			</div>
		</div>
	);
};