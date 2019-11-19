<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HOME WORK02 </title>


    <script>


        // Q 1 
        // function isWeekend() {
        //     const todayDate = new Date();
        //     const day = todayDate.getDay();
        //     let b = day;
        //     let result;
        //     while (b !== 0 || b !== 6) {
        //         return result = "week day"
        //         b++;
        //     }
        //     return result = "weekend "
        // }

        // console.log(isWeekend())
        function isWeekend() {

            let result = ["weekend", "weekday", "weekday", "weekday", "weekday", "weekday", "weekend"]
            const todayDate = new Date();
            const day = todayDate.getDay();
            return result[day]
        }
        console.log(isWeekend())


        // Q2 
        const item = {
            "name": "Avocado",
            "type": "Fruit",
            "category": "Food",
            "price": 200
        }

        function applyCoupon(item) {

            let result;

            return function (x) {
                let value;
                value = (item.price * x) / 100;
                result = item.price - value;
                return result;
            }

        }
        console.log(applyCoupon(item)(10))
        // Q3

        function isDual(array) {
            let sum;
            let sumone = array[0] + array[1]
            let result = []
            if (array.length % 2 === 0) {
                for (let i = 0; i < array.length; i = i + 2) {
                    sum = array[i] + array[i + 1];
                    if (sumone === sum) {
                        return 1
                    }
                }
                // for (let i = 0; i < result.length; i++) {
                //     if (result[i] === result[i + 1]) {
                //         return 1
                //     }
                // }

            } else {
                return 0;
            }

        }
        console.log(isDual([1, 2, 3, 0]))

    </script>
</head>

<body>
    <!-- <p>kkk</p>
    <p>mohamed 1 </p>
    # programming file MSD
    ## Html- js

    ``` function in java script
    function sayHi() { alert( "Hello" );
    }alert( sayHi ); ``` -->


</body>

</html>