
function useTitle(title) {


    const pageTitle = document.title = `${title}`

    return {pageTitle}
}

export default useTitle