function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve('Order Places');
        } else {
            reject('Sorry, we Only Serve Coffe');
        }
    })
}

function processOrder(Order) {
    return new Promise(function (resolve) {
        console.log('Order is being Processed');
        resolve(`Coffee Served for the ${Order}`)
    })
}

// placeOrder('coffee').then(function (orderFromCustomer) {
//     console.log('Request Recieved')
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function (orderFromCustomer) {
//     console.log(orderFromCustomer);
// }).catch(function (err) {
//     console.log(err);
// })


// Async - Await 
async function serveOrder(order) {
    try {
        const orderRecived = await placeOrder(order);
        console.log('Order Recived');
        const processorder = await processOrder(orderRecived);
    } catch (error) {
        console.log(error);
    }
}

serveOrder('coffefe');

