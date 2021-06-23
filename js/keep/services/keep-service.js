import { storageService } from '../../services/async-storage-service.js';

const KEEP_KEY = 'notes';
const gNotes = _createNotes();

export const keepService = {
	query,
};

function query() {
	return storageService.query(KEEP_KEY).then((notes) => {
		if (!notes.length) {
			return storageService.postMany(KEEP_KEY, _createNotes());
		}
		return notes;
	});
}

function _createNotes() {
	var notes = [
		{
			type: 'noteTxt ',
			isPinned: true,
			info: { txt: 'Fullstack Me  Baby!' },
		},
		{
			type: 'noteImg',
			info: {
				url: 'https://img.vcomments.com/en/funny/47.jpg',
				title: 'Me   playing Mi',
			},
			style: { backgroundColor: '#00d' },
		},
		{
			type: 'noteTodos',
			info: {
				label: 'How    was   it:',
				todos: [
					{ txt: 'Do   that', doneAt: null },
					{ txt: 'Do   this', doneAt: 187111111 },
				],
			},
		},
	];
	return notes;
}
