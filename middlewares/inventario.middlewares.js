import e from "cors";

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
        console.log(error);
    }
    next();
}

export const getInventarioMiddleware = async (req, res, next) => {
    const url = req.url;
    console.log(`Fecha de la consulta: ${new Date()}; URL consultada: ${url}; Query recibidas: `, req.query);
    next();
}

export const findJewelByIdMiddleware = async (req, res, next) => {
    const url = req.url;
    console.log(`Fecha de la consulta: ${new Date()}; URL consultada: ${url}; Parametros recibidas: `, req.params);
    next();
}