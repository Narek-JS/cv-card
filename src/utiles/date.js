
const currentFullDate = () => {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}.${year}`;
};

export { currentFullDate };