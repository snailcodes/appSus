import { storageService } from '../../services/async-storage-service.js';
import { utilService } from '../../services/util-service.js'

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
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'Wassap? Lorem, ipsum dolor sit amet consectetur',
            body: 'Pick up! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: true,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'Hey there!!! Lorem, ipsum dolor',
            body: 'How are you doing?! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'You won $1,000,000 dollars!!! Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            body: 'OMG can you believe it??? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam beatae dolor voluptate ex voluptates ea illo. Eveniet, aspernatur assumenda?',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: true,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }, {
            id: utilService.makeId(),
            from: 'omribaram@gmail.com',
            to: 'omribaram@gmail.com',
            subject: 'We\'re glad to inform you!!!',
            body: 'You have been accepeted! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit exercitationem, eaque quos eos quis! Eum repellendus veritatis enim iste sequi voluptatibus, ut earum nemo assumenda nostrum quasi, quisquam voluptate ipsam id debitis odit maxime necessitatibus est, eveniet dolorem ipsum hic placeat sit? Facere similique, nesciunt esse culpa repellat distinctio, ab doloribus perspiciatis sequi rem et commodi aut! Adipisci cupiditate eius quaerat cumque? Repellat officia, beatae natus, consectetur deleniti quod maiores consequuntur vitae soluta unde autem iure facilis fugit ad molestiae eligendi? Hic aliquid perspiciatis labore iusto blanditiis animi cum, quas adipisci, quo fuga maiores earum aspernatur, ab officia est.',
            isRead: false,
            isStarred: false,
            isSent: false,
            isDeleted: false,
            sentAt: +(Date.now() + (Math.random() * 1000)).toFixed(0)
        }];
        localStorage.setItem(EMAILS_KEY, JSON.stringify(emails))
        return Promise.resolve(JSON.parse(localStorage.getItem(EMAILS_KEY)))
    }
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