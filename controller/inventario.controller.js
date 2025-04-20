import { getInventario, filterInventario, findJewelById } from "../models/inventario.models.js";
import { setHATEOAS } from "../util/utils.js";

export const getInventarioController = async (req, res) => {
    const query = req.data;
    try {
        if (query.valid) {
            const data = await getInventario(query);
            if (data != "") {
                const result = setHATEOAS(data);
                res.json(result);
            } else {
                res.json({
                    status: 200,
                    mesage: "No se encontraron resultados para su busqueda",
                });
            }
        }
    } catch (error) {
        res.json({ errorController: error });
    }
}

export const filterInventarioController = async (req, res) => {
    const { data } = req;
    try {
        if (data.valid) {
            const rsp = await filterInventario(data);
            if (rsp != "") {
                res.json(rsp);
            } else {
                res.json({
                    status: 200,
                    mesage: "No se encontraron resultados para su busqueda",
                });
            }

        }

    } catch (error) {
        next({ errorController: error });
    }
}

export const findJewelByIdController = async (req, res) => {
    const query = req.data;
    try {
        if (query.valid) {
            const data = await findJewelById(query)
            res.json(data);
        } else {
            res.json({
                status: 200,
                mesage: "No se encontraron resultados para su busqueda",
            });
        }
    } catch (error) {
        res.json({ errorController: error });
    }
}