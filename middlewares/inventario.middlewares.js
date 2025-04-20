export const filterInventarioMiddleware = async (req, res, next) => {
    const { precio_min, precio_max, categoria, metal } = req.query;
    const url = req.url;
    console.log(`Fecha de la consulta: ${new Date()}; URL consultada: ${url}; Query recibidas: `, req.query);
    try {
        if (precio_min && isNaN(precio_min)) { 
            return res.json({ message: "el precio minimo debe ser numerico" }); 
        }else if (precio_max && isNaN(precio_max)) { 
            return res.json({ message: "el precio maximo debe ser numerico" }); 
        }else if (categoria && !isNaN(categoria)) { 
            return res.json({ message: "la categoria no puede ser numerica" }); 
        }else if (metal && !isNaN(metal)) { 
            return res.json({ message: "el metal no puede ser numerico" }); 
        }
        
    } catch (error) {
        return res.json(error);
    }
    req.data={
        precio_max: precio_max,
        precio_min: precio_min,
        categoria: categoria,
        metal:metal,
        valid:true
    }
    next();
}

export const getInventarioMiddleware = async (req, res, next) => {
    const url = req.url;
    const {limits, page, order_by} = req.query;
    console.log(`Fecha de la consulta: ${new Date()}; URL consultada: ${url}; Query recibidas: `, req.query);
    try {
        if(limits && isNaN(limits)){
            return res.json({message:"EL limite debe ser numerico"});
        }else if(page && isNaN(page)){
            return res.json({message:"La pagina debe ser numerica"})
        }else if(order_by && !isNaN(order_by)){
            return res.json({massege:"La query order_by debe ser texto y se compone asi: campo_orden, ej id_ASC"});
        }
    } catch (error) {
        return res.json(error);
    }
    req.data={
        limits: limits,
        page: page,
        order_by: order_by,
        valid:true
    }
    next();
}

export const findJewelByIdMiddleware = async (req, res, next) => {
    const url = req.url;
    const {id}=req.params;
    console.log(`Fecha de la consulta: ${new Date()}; URL consultada: ${url}; Parametros recibidas: `, req.params);
    try {
        if(id && isNaN(id)){
            return res.json({message:"El id debe ser numerico"});
        }else if(!id){
            return res.json({message:"El id es requerido"});
        }
    } catch (error) {
        return res.json(error);
    }
    req.data={
        id:id,
        valid:true
    };
    next();
}