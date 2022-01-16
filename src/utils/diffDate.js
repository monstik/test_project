export const diffDate = (dateFrom, dateTo) => {
    return Math.round((new Date('2021-09-02') - new Date('2011-09-02')) / (24 * 3600 * 365 * 1000));
}