window.resizeApi = (() => {
    const resizeCallbacks = [];

    const runCallbacksOnSizeChange = (() => {
        // Set initials
        let recentDocumentHeight = document.documentElement.clientHeight;
        let recentDocumentWidth = document.documentElement.clientWidth;

        return () => {
            const currentDocumentHeight = document.documentElement.clientHeight;
            const currentDocumentWidth = document.documentElement.clientWidth;

            const sameDocumentSize = currentDocumentHeight === recentDocumentHeight && currentDocumentWidth === recentDocumentWidth;

            recentDocumentHeight = currentDocumentHeight;
            recentDocumentWidth = currentDocumentWidth;

            if (sameDocumentSize) return;
            // Run callback if size has changed
            resizeCallbacks.forEach((callback) => callback());
        };
    })();

    const pushCallbacks = (...callbacks) => {
        resizeCallbacks.push(...callbacks);
    };

    window.addEventListener('resize', runCallbacksOnSizeChange);

    return {
        pushCallbacks
    }
})();