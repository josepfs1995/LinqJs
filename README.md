# LinqJs
Methods:

"GroupBy", ObjectArray.groupBy(p=> p.Nombre);
"Any",ObjectArray.any(p=> p.Nombre === "Josep");
"Where", ObjectArray.where(p=> p.Edad > 18);
"Where With Any",ObjectArray.where(p=> p.Nombre === "Josep").any(p=>p.Nombre === "Josep");
"Where With GroupBy",ObjectArray.where(p=> p.Nombre === "Josep").groupBy(p=>p.Apellido);
"First",ObjectArray.first();
"FirstOrDefault",ObjectArray.firstOrDefault();
"FirstOrDefault With Expression",ObjectArray.firstOrDefault(x=>x.Nombre == "Isac");
"Last",ObjectArray.last();
"LastOrDefault",ObjectArray.lastOrDefault();
"LastOrDefault With Expression",ObjectArray.last(x=>x.Nombre == "Isac");
"SortBy Edad",ObjectArray.sortBy(x=>x.Edad);
"SortByDescending Edad",ObjectArray.sortByDescending(x=>x.Edad);
"Max By Edad",ObjectArray.max(x=>x.Edad);
"Min By Edad",ObjectArray.min(x=>x.Edad);
"Select",ObjectArray.select(x=>{return {Obj: x.Edad}});
