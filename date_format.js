function date_format(date) {
  let newDate = date.split('/')
    let day =  newDate[2]
    let month = newDate[1]
    let year = newDate[0]
      return `${year}/${month}/${day} | ${year}-${month}-${day} | ${month}/${day}/${year}`
}
console.log(date_format( '2019/12/28'));