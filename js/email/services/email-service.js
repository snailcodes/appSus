import { storageService } from '../../async-storage-service.js';

const EMAILS_KEY = 'emailsDB';

export const emailService = {
    query,
    getById,
    remove,
    save,
    createEmail
}

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

function createEmail() {
    const email = {
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: Date.now()
    }
    save(email);
}