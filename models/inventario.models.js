import pool from "../db/db.js";
import format from "pg-format";

export const getInventario = async ({ limits = 10, page = 1, order_by = "id_ASC" }) => {
    const [campo, orden] = order_by.split('_');
    const offset = (page - 1) * limits;
    const query = "select * from inventario order by %s %s limit %s offset %s";
    try {
        const formatQuery = format(query, campo, orden, limits, offset);
        const { rows } = await pool.query(formatQuery);
        return rows;
    } catch (error) {
        return {errorModel: error};
    }

}

export const filterInventario = async ({ precio_min, precio_max, categoria, metal }) => {
    let query = 'select * from inventario';
    let filtros = [];
    const values = [];
    const addFilter = (field, sign, value) => {
        values.push(value);
        const { length } = filtros;
        filtros.push(`${field} ${sign} $${length + 1}`)
    }

    if (precio_min) addFilter('precio', '>=', precio_min);
    if (precio_max) addFilter('precio', '<=', precio_max);
    if (categoria) addFilter('categoria', '=', categoria);
    if (metal) addFilter('metal', '=', metal);

    if (filtros.length > 0) {
        filtros = filtros.join(" AND ");
        query += ` WHERE ${filtros}`;
    }

    try {
        const { rows } = await pool.query(query, values);
        return rows;
    } catch (error) {
        return {errorModel: error};
    }


}

export const findJewelById = async ({ id }) => {
    const query = 'select * from inventario where id=$1';
    try {
        const { rows } = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        return {errorModel: error};
    }

}