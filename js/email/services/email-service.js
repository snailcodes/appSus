import { storageService } from '../../services/async-storage-service.js';

const EMAILS_KEY = 'emailsDB';

export const emailService = {
    query,
    getById,
    getAdjcntEmails,
    remove,
    save
}

function query() {
    if (localStorage.getItem(EMAILS_KEY) && JSON.parse(localStorage.getItem(EMAILS_KEY)).length > 0) {
        return Promise.resolve(JSON.parse(localStorage.getItem(EMAILS_KEY)))
    } else {
        const emails = [{
            id: makeId(),
            subject: 'Wassap? Lorem, ipsum dolor sit amet consectetur',
            body: 'Pick up! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: true,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'Hey there!!! Lorem, ipsum dolor',
            body: 'How are you doing?! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'You won $1,000,000 dollars!!! Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            body: 'OMG can you believe it??? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: true,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }, {
            id: makeId(),
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: Date.now()
        }];
        localStorage.setItem(EMAILS_KEY, JSON.stringify(emails))
        return Promise.resolve(JSON.parse(localStorage.getItem(EMAILS_KEY)))
    }
}

// function query() {
//     createEmails();
//     return storageService.query(EMAILS_KEY);
// }

function makeId(length = 7) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getById(emailID) {
    return storageService.get(EMAILS_KEY, emailID);
}

function getAdjcntEmails(emailId) {
    return query()
        .then(emails => {
            const idx = emails.findIndex(email => email.id === emailId)
            return {
                prevEmail: (idx === 0) ? emails[1] : emails[idx - 1],
                nextEmail: (idx + 1 > emails.length - 1) ? emails[0] : emails[idx + 1],
            }
        })
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