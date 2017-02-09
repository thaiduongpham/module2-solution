(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buyCtrl = this;
        buyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyItems();

        buyCtrl.buyIt = function (index) {
            ShoppingListCheckOffService.buy(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            {name: "cookies", quantity: 10},
            {name: "cakes", quantity: 15},
            {name: "apples", quantity: 7},
            {name: "milk", quantity: 20},
            {name: "water", quantity: 50},
            {name: "lemon", quantity: 6}
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }

        service.buy = function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        }
    }

})();




