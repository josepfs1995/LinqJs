# LinqJs
Methods:

"GroupBy", ObjectArray.groupBy(p=> p.Nombre); <br>
"Any",ObjectArray.any(p=> p.Nombre === "Josep");<br>
"Where", ObjectArray.where(p=> p.Edad > 18);<br>
"Where With Any",ObjectArray.where(p=> p.Nombre === "Josep").any(p=>p.Nombre === "Josep");<br>
"Where With GroupBy",ObjectArray.where(p=> p.Nombre === "Josep").groupBy(p=>p.Apellido);<br>
"First",ObjectArray.first();<br>
"FirstOrDefault",ObjectArray.firstOrDefault();<br>
"FirstOrDefault With Expression",ObjectArray.firstOrDefault(x=>x.Nombre == "Isac");<br>
"Last",ObjectArray.last();<br>
"LastOrDefault",ObjectArray.lastOrDefault();<br>
"LastOrDefault With Expression",ObjectArray.last(x=>x.Nombre == "Isac");<br>
"SortBy Edad",ObjectArray.sortBy(x=>x.Edad);<br>
"SortByDescending Edad",ObjectArray.sortByDescending(x=>x.Edad);<br>
"Max By Edad",ObjectArray.max(x=>x.Edad);<br>
"Min By Edad",ObjectArray.min(x=>x.Edad);<br>
"Select",ObjectArray.select(x=>{return {Obj: x.Edad}});<br>
