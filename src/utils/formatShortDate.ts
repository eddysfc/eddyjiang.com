export const formatShortDate = (date: Date) => {
    const formattedShortDate = new Intl.DateTimeFormat("en-US", {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
    }).format(date);
    return formattedShortDate;
};