export function formatName(names: string){
  if(typeof names !== 'undefined'){
    console.log(names);
    const lastIndex = names.split(',').length - 1;
    const place = names.split(',')[0].concat(', ').concat(names.split(',')[lastIndex]);
    return place;
    }
  }