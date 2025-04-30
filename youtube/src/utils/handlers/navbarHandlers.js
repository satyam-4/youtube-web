export const createHandlers = (setUserModalState, userModalRef) => ({
    handleKeyDown: (event) => {
        if(event .key === "Escape") {
            setUserModalState(false)  
        } 
    },

    disableScrollByWheelAndTouch: (event) => {
        event.preventDefault()
        event.stopPropagation()
    },

    disableScrollByKeys: (event) => {
        if(["ArrowUp", "ArrowDown", " ", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
            event.preventDefault()
            event.stopPropagation()
        }
    }
})
