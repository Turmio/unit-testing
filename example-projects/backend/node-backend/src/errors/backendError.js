class BackendError extends Error {
    constructor(message, options) {
        super(message, options)
    }
}

export default BackendError