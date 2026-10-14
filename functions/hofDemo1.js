// function returning from a function
function outer()
{
    console.log("Function Outer Started")

    function inner()
    {
        console.log("Inner Function Started")
        console.log("Inner Function Ended")
    }

    console.log("Function Outer Ended")

    return inner
}
// outer()

// console.log(outer())

let ans = outer()
console.log(ans)
ans()