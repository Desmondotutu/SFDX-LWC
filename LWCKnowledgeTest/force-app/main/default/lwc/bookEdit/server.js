// server.js 
// A server abstraction

class BookEndpoint {
    bookStore = new Map();
    nextBookId = 0;

    getAll() {
        return this.bookStore.values()
    }

    getById(id) {
        return this.bookStore.get(parseInt(id));
    }

    create(title) {
        const book = {
            id: this.nextBookId++,
            title,
        };
        
        this.bookStore.set(book.id, book);
    }

    update(id, title) {
        const book = {
            id: parseInt(id),
            title
        };

        this.bookStore.set(book.id, book);
    }

    remove(id) {
        this.bookStore.delete(parseInt(id));
    }
}

export const bookEndpoint = new BookEndpoint();

bookEndpoint.create('The Way of Kings');