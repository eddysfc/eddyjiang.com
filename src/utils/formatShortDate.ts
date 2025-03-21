export const formatShortDate = (date: Date) => {
    const formattedShortDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }).format(date);
    return formattedShortDate;
};