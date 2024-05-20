export const getFormattedDate = (date:Date) => {
    const monthesArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const day = date.getDate()
    const month = monthesArr[date.getMonth()]
    const year = date.getFullYear()
    const formattedDate = `${day} ${month} ${year}`
    return formattedDate
}