export const CARDINFO = 'Card_info';

export const CardInfo = {
    name: CARDINFO,
    primaryKey: 'id',
    properties: {
        id: 'int',
        cardName: 'string',
        cardType: 'string',
        price: 'float',
        cardNumber: 'int',
        expiryDate: 'string',
        imgUrl: 'string',
        time: 'date'
    },
};