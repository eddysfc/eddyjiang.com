interface Props {
    text: string;
    link: string;
    currentPage: string;
}


const BigHeaderLink = ({ text, link, currentPage }: Props) => {

    const isActive = link === "/" ? currentPage === "/" : currentPage.startsWith(link);

    return (
        <div className="text-4xl">
            <a href={link}>
                <span className="relative group">
                    {text}
                    <span
                        className={`absolute bottom-0 translate-y-1 h-0.5 bg-black ${isActive ? "left-0 w-full" : "left-1/2 w-0 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"}`}
                    />
                </span>
            </a>
        </div>
    )
}

export default BigHeaderLink