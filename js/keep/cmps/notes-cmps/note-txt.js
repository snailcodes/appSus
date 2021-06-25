export default {
	props: ['note'],
	template: `
    <section class="note note-txt">
		<p> {{note.info.title}}</p>
		<p>{{note.info.txt}}  </p>
	</section>
        
    `,
};
