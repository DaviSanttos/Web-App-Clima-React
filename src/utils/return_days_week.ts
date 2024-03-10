export function returnDayWeek(data: any, index: number){

    const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    let day = data.daily.time[index].split('-')[2];
    let month = Number(data.daily.time[index].split('-')[1] -1);
    let year = data.daily.time[index].split('-')[0];
    let date = new Date(year, month, day);

    return daysWeek[date.getDay()];
  }