const connection = require('../database/connection');

module.exports = {
    async getAllProducts(request, response) {
        const products = await connection('estoque')
            .select([
                'pmc',
                'promocao',
                'barra',
                'quantidade',
                'validade'
            ])
            
        let productsWithDiscounts = [];

        for ( p of products ) {
            
            let product = {
                ean: p.barra,
                preco: p.pmc,
                estoque: p.quantidade
            }

            if ( await discountIsValid(p) ) {
                if (p.promocao < p.pmc) {
                    product.price = p.promocao;
                }
            }

            productsWithDiscounts.push(product);
        }
        return response.status(200).send(response.json(productsWithDiscounts));
    }
}

const discountIsValid = async (product) => {
    
    if (product.validade === null) {
        return false;
    }

    return product.validade > new Date() ? true : false;  
}