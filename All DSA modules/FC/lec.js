class Order {
    constructor(order_Id, item_Name, payment_mode, shipment_Status) {
        this.orderId = order_Id;
        this.itemName = item_Name;
        this.paymentMode = payment_mode;
        this.shipmentStatus = shipment_Status;
    }
     getShipmentStatus() {
       return this.shipmentStatus;
    }
    updateShipmentStatus(shipment_Status) {
        return this.shipmentStatus = shipment_Status;
    }
}
let order1 = new Order('1', 'Earphone', 'COD', 'Pending');
//let order2 = new Order(20, 'TV', 'Credit Card', 'Pending');
//console.log(order1)
console.log(order1.getShipmentStatus());
console.log(order1.updateShipmentStatus('Delievered'));
// console.log(order2.getShipmentStatus())
