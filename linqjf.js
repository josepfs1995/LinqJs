var ObjectArray = [
{Nombre: "Benjamin", Apellido: "Fuentes", Edad: 2},
{Nombre: "Vicente", Apellido: "Fuentes", Edad: 49},
{Nombre: "Josep", Apellido: "Fuentes", Edad: 18}, 
{Nombre: "Isac", Apellido: "Fuentes", Edad: 18},
{Nombre: "Josep", Apellido: "Sierra", Edad: 20}
];
Array.prototype.groupBy = function(expression){
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);
  var newObject = {};
  this.forEach(element => {
    if(Object.keys(newObject).indexOf(expression(element).toString()) > -1){
      newObject[expression(element)].push(element);
    }
    else newObject[expression(element)] = [element];
  });
  return newObject;
}
Array.prototype.any = function(expression){
  var any = false;
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);

  this.forEach(element => {
    any = !any ? expression(element): any;
  });
  return any;
}
Array.prototype.where = function(expression){
  var newArray = [];
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);

  this.forEach(element => {
    if(expression(element)) newArray.push(element);
  });
  return newArray;
}
Array.prototype.first = function(){
  var arrayObject = this ?? [];
  if(arrayObject.length === 0)
    throw Error("No se encontro registros en la lista", 20);
  return arrayObject[0];
}
Array.prototype.firstOrDefault = function(expression){
  var arrayObject = this ?? [];
  if(expression != null) arrayObject = arrayObject.where(expression);
  if(arrayObject.length === 0)
    return null;
  return arrayObject[0];
}
Array.prototype.last = function(){
  var arrayObject = this ?? [];
  if(arrayObject.length === 0)
    throw Error("No se encontro registros en la lista", 20);
  return arrayObject[arrayObject.length - 1];
}
Array.prototype.lastOrDefault = function(expression){
  var arrayObject = this ?? [];
  if(expression != null) arrayObject = arrayObject.where(expression);
  if(arrayObject.length === 0)
    return null;
  return arrayObject[arrayObject.length - 1];;
}
Array.prototype.sortBy = function(expression){
  var arraySort = Object.assign([], this);
  const quickSort = function(array, expression){
    if(array.length >= 2){
      var left = [];
      var right = [];
      var index = parseInt(array.length / 2);
      var pivot = array[index];
      for(var i=0;i<array.length;i++){
        if(i!==index){
          if(expression(array[i]) < expression(pivot)) left.push(array[i]);
          else right.push(array[i]);
        }
      }
      if(left.length < right.length) left.push(pivot);
      else right.push(pivot);
      return quickSort(left,expression).concat(quickSort(right,expression));
    }
    else return array;
  };
  return quickSort(arraySort, expression);
}
Array.prototype.sortByDescending = function(expression){
  var arraySort = Object.assign([], this);
  const quickSort = function(array, expression){
    if(array.length >= 2){
      var left = [];
      var right = [];
      var index = parseInt(array.length / 2);
      var pivot = array[index];
      for(var i=0;i<array.length;i++){
        if(i!==index){
          if(expression(array[i]) < expression(pivot)) left.push(array[i]);
          else right.push(array[i]);
        }
      }
      if(left.length < right.length) left.push(pivot);
      else right.push(pivot);
      return quickSort(right,expression).concat(quickSort(left,expression));
    }
    else return array;
  };
  return quickSort(arraySort, expression);
}
Array.prototype.max = function(expression){
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);
  this.forEach(element => {
    if(typeof expression(element) !== "number")
      throw Error("La expression debe ser función flecha", 10);
  });
  return this.sortBy(expression).last();
}
Array.prototype.min = function(expression){
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);
  this.forEach(element => {
    if(typeof expression(element) !== "number")
      throw Error("La expression debe ser función flecha", 10);
  });
  return this.sortByDescending(expression).last();
}
Array.prototype.select = function(expression){
  if(typeof expression !== "function")
    throw Error("La expression debe ser función flecha", 10);
  var newArray = [];
  this.forEach(element => newArray.push(expression(element)));
  return newArray;
}
console.log("Array", ObjectArray);
console.log("GroupBy", ObjectArray.groupBy(p=> p.Nombre));
console.log("Any",ObjectArray.any(p=> p.Nombre === "Josep"));
console.log("Where", ObjectArray.where(p=> p.Edad > 18));
console.log("Where With Any",ObjectArray.where(p=> p.Nombre === "Josep").any(p=>p.Nombre === "Josep"));
console.log("Where With GroupBy",ObjectArray.where(p=> p.Nombre === "Josep").groupBy(p=>p.Apellido));
console.log("First",ObjectArray.first());
console.log("FirstOrDefault",ObjectArray.firstOrDefault());
console.log("FirstOrDefault With Expression",ObjectArray.firstOrDefault(x=>x.Nombre == "Isac"));
console.log("Last",ObjectArray.last());
console.log("LastOrDefault",ObjectArray.lastOrDefault());
console.log("LastOrDefault With Expression",ObjectArray.last(x=>x.Nombre == "Isac"));
console.log("SortBy Edad",ObjectArray.sortBy(x=>x.Edad));
console.log("SortByDescending Edad",ObjectArray.sortByDescending(x=>x.Edad));
console.log("Max By Edad",ObjectArray.max(x=>x.Edad));
console.log("Min By Edad",ObjectArray.min(x=>x.Edad));
console.log("Select",ObjectArray.select(x=>{return {Obj: x.Edad}}));