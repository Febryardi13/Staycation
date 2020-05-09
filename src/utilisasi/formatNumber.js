export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID") //number format bawaan browser
        return formatNumbering.format(number)
} 