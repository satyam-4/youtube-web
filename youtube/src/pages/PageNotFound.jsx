import pageNotFoundIllustration from "../assets/illustrations/page-not-found_illustration.svg"

const PageNotFound = () => {
    return (
        <div className="w-screen h-screen bg-zinc-300 flex justify-center items-center flex-col gap-[1rem]">
            <img 
            className="w-1/2 xl:w-1/4"
            src={pageNotFoundIllustration} alt="Page not found" />
            <span className="text-xs sm:text-lg font-semibold">
                Page not found, try searching for something else
            </span>
        </div>
    )
}

export default PageNotFound