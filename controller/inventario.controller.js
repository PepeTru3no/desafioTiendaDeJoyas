import { getInventario, filterInventario, findJewelById } from "../models/inventario.models.js";

export const getInventarioController = async (req, res) => {
    const query = req.query;
    try {
        const data = await getInventario(query);
        const result = setHATEOAS(data);
        res.json(result);
    } catch (error) {
        res.json({errorController: error});
    }
}

export const filterInventarioController = async (req, res) => {
    const query = req.query;
    try {
        const data = await filterInventario(query);
        res.json(data);
    } catch (error) {
        res.json({errorController: error});
    }
}

const setHATEOAS = (data) => {
    const totalJoyas = data.length;
    let stockTotal = 0;
    const results = data.map((d) => {
        stockTotal += d.stock;
        return {
            name: d.nombre,
            href: `/joyas/joya/${d.id}`
        }
    });
    const HATEOAS = {
        totalJoyas,
        stockTotal,
        results
    };
    return HATEOAS;
}

export const findJewelByIdController = async (req, res) => {
    const query = req.params;
    try {
        const data = await findJewelById(query)
        res.json(data);
    } catch (error) {
        res.json({errorController: error});
    }
}