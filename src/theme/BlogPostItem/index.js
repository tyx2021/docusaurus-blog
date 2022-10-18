import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
	return (
		<article className='prose dark:prose-invert prose-stone prose-code:before:content-none prose-code:after:content-none'>
			<BlogPostItem {...props} />
		</article>
	);
}
