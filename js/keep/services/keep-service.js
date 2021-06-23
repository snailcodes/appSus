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
	let newNote = {
		id: storageService.makeId(),
		type: type,
		isPinned: false,
		info: info,
	};
	return storageService.post(keepService, newNote);
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
		},
		{
			id: storageService.makeId(),
			type: 'noteImg',
			info: {
				url: 'https://img.vcomments.com/en/funny/47.jpg',
				title: 'Me   playing Mi',
			},
			style: { backgroundColor: '#00d' },
		},
		{
			id: storageService.makeId(),
			type: 'noteTodos',
			info: {
				label: 'How    was   it:',
				todos: [
					{
						id: storageService.makeId(),
						txt: 'Do   that',
						doneAt: null,
					},
					{
						id: storageService.makeId(),
						txt: 'Do   this',
						doneAt: 187111111,
					},
				],
			},
		},
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			id: storageService.makeId(),
			type: 'noteTxt',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
	];
	return notes;
}
