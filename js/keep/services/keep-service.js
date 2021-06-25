import { storageService } from '../../services/async-storage-service.js';

const KEEP_KEY = 'notes';

export const keepService = {
	query,
	addNote,
	getById,
	updateNote,
	removeNote,
};

function query() {
	return storageService.query(KEEP_KEY).then((notes) => {
		if (!notes.length) {
			return storageService.postMany(KEEP_KEY, _createNotes());
		}
		return notes;
	});
}

function addNote(type, info) {
	console.log(type, info);
	let newNote = {
		id: null,
		type: type,
		isPinned: false,
		info: info,
		style: { backgroundColor: 'lightblue' },
	};
	return storageService.post(KEEP_KEY, newNote);
}

function getById(noteId) {
	return storageService.get(KEEP_KEY, noteId);
}

function updateNote(newNote) {
	console.log('updating note');
	return getById(newNote.id).then(() => {
		return storageService.put(KEEP_KEY, newNote);
	});
}

function removeNote(noteId) {
	console.log('removing note');
	return storageService.remove(KEEP_KEY, noteId);
}

function _createNotes() {
	var notes = [
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
			style: { backgroundColor: 'lightblue' },
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: 'lightblue' },
			type: 'noteImg',
			info: {
				url: 'https://img.vcomments.com/en/funny/47.jpg',
				title: 'Smile ;)',
			},
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: 'lightblue' },
			type: 'noteImg',
			info: {
				url: 'https://www.icegif.com/wp-content/uploads/funny.gif',
				title: 'DONT PANIC',
			},
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: 'lightblue' },
			type: 'noteImg',
			info: {
				url: 'https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/full/public/horsin.jpg?itok=AovIZOaD&mtime=1504767165',
				title: '',
			},
		},

		{
			id: storageService.makeId(),
			type: 'noteTodos',
			style: { backgroundColor: 'lightblue' },
			info: {
				label: 'How    was   it:',
				todos: [
					{
						id: storageService.makeId(),
						txt: 'Do   that',
						doneAt: null,
						isMarked: false,
					},
					{
						id: storageService.makeId(),
						txt: 'Do   this',
						doneAt: null,
						isMarked: false,
					},
				],
			},
		},
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			style: { backgroundColor: 'lightblue' },
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: 'lightblue' },
			type: 'noteTxt',
			isPinned: true,
			info: {
				txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet id. Tincidunt id aliquet risus feugiat in ante metus dictum. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Aliquet enim tortor at auctor. Ipsum nunc aliquet bibendum enim facilisis. Eget duis at tellus at urna condimentum mattis pellentesque id. Accumsan sit amet nulla facilisi morbi. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Sit amet nulla facilisi morbi tempus. Quisque non tellus orci ac auctor. Pretium fusce id velit ut tortor pretium viverra suspendisse. Neque ornare aenean euismod elementum nisi quis eleifend quam. Risus in hendrerit gravida rutrum quisque.',
			},
		},

		{
			id: storageService.makeId(),
			style: { backgroundColor: 'lightblue' },
			type: 'noteVideo',
			info: {
				url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
				title: 'MovieTime',
			},
		},
	];
	return notes;
}
//
