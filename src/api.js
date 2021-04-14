const BASE_URL = process.env.HOST;

async function callApi(endpoint, options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    return response.json();
}

const api = {
    badges: {
        list() {
            // throw new Error("Error: Not Found");
            return callApi('/api/badges');
        },
        create(badge) {
            // throw new Error("Error: Not Found");
            return callApi(`/api/badges`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
        },
        read(badgeId) {
            // throw new Error("Error: Not Found");
            return callApi(`/api/badges/${badgeId}`);
        },
        update(badgeId, updates) {
            return callApi(`/api/badges/${badgeId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        remove(badgeId) {
            return callApi(`/api/badges/${badgeId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;