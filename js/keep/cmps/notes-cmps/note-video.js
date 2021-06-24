export default {
	props: ['note'],
	template: `
    <section class="note">
		<video class="keep-video" controls>
			<source :src="note.info.url" type="video/mp4">
			<source :src="note.info.url" type="video/webm">
			<p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
		</video>	
	</section>
        
    `,
};
