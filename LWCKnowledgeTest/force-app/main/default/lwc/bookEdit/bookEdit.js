import { LightningElement, api, wire } from 'lwc';
import { getBook } from 'c/bookApi';

export default class BookEdit extends LightningElement {
    @api bookId;
    draftTitle = "";

    @wire(getBook, { id: '$bookId'})
    bookDetails(book) {
        if (book === null) {
            console.error("Book with id %s does not exist", this.bookId);
        }

        this.draftTitle = book.title;
    };

    handleTitleChange(event) {
        this.draftTitle = event.target.value;
    }

    handleSave() {
        this.dispatchEvent(
            new CustomEvent('saveedit', {
                detail: {
                    id: this.bookId,
                    title: this.draftTitle
                }
            })
        );
    }

    handleCancel() {
        this.draftTitle = "";
        this.dispatchEvent(
            new CustomEvent('canceledit')
        );
    }
}