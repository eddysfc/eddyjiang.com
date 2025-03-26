export const formatMonthYearDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    }).format(date);
    return formattedDate;
};