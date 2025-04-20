export const setHATEOAS = (data) => {
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