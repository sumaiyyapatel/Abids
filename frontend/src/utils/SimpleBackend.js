class SimpleBackend {
    constructor(services, options = {}) {
        this.init(services, options);
    }

    init(services, options = {}) {
        this.services = services;
        this.options = { ...options };
    }

    read(language, namespace, callback) {
        const url = `/locales/${language}/${namespace}.json`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    return callback('failed loading ' + url, false); // Retry? No.
                }
                return response.json();
            })
            .then((data) => {
                callback(null, data);
            })
            .catch((err) => {
                console.error('SimpleBackend load error:', err);
                callback(err, false);
            });
    }
}

SimpleBackend.type = 'backend';

export default SimpleBackend;
