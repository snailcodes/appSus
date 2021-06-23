import { storageService } from '../../services/async-storage-service.js';

const EMAILS_KEY = 'emailsDB';

export const emailService = {
    query,
    getById,
    remove,
    save
}

createEmails();

function query() {
    return storageService.query(EMAILS_KEY);
}

function getById(emailID) {
    return storageService.get(EMAILS_KEY, emailID);
}

function remove(emailID) {
    return storageService.remove(EMAILS_KEY, emailID);
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function createEmails() {
    const emails = [{
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: Date.now()
    }, {
        subject: 'Hey there!!!',
        body: 'How are you doing?!',
        isRead: false,
        sentAt: Date.now()
    }, {
        subject: 'You won $1,000,000 dollars!!!',
        body: 'OMG can you believe it???',
        isRead: false,
        sentAt: Date.now()
    }, {
        subject: 'We\'re glad to inform you!!!',
        body: 'You have been accepeted!',
        isRead: false,
        sentAt: Date.now()
    }];
    storageService.postMany(EMAILS_KEY, emails);
}