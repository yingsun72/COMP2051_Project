function add_button_list(aa){
            // Add the button
            aa.addBuyButton("#blueberries",{
                name:'blueberries(20lb)',                     // Item name appear on the cart
                thumbnail:'../images/blueberries_small.jpg',      // Thumbnail path of the item (Optional)
                price:'40',                        // Cost of the item
                shipping:0                         // Shipping cost for the item (Optional)
            });
            aa.addBuyButton("#cherries",{
                name:'cherries(20lb)',             
                thumbnail:'../images/cherries_small.jpg',
                price:'40',
                shipping:0 
            });
            aa.addBuyButton("#strawberries",{
                name:'strawberries(20lb)',             
                thumbnail:'../images/strawberries_small.jpg',
                price:'40',
                shipping:0
            });
            aa.addBuyButton("#grapes",{
                name:'grapes(20lb)',             
                thumbnail:'../images/grapes_small.jpg',
                price:'40',
                shipping:0
            });
            aa.addBuyButton("#raspberries",{
                name:'raspberries(20lb)',             
                thumbnail:'../images/raspberries_small.jpg',
                price:'40',
                shipping:0
            });
            aa.addBuyButton("#apples",{
                name:'apples(20lb)',             
                thumbnail:'../images/apples_small.jpg',
                price:'40',
                shipping:0
            });
            
            // For code highlight
            prettyPrint();
        }
