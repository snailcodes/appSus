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
				title: 'Me   playing Mi',
			},
		},
		{
			id: storageService.makeId(),
			type: 'noteTodos',
			style: { backgroundColor: '#00d' },
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
			style: { backgroundColor: '#00d' },
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: '#00d' },
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: '#00d' },
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			style: { backgroundColor: '#00d' },
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
	];
	return notes;
}
