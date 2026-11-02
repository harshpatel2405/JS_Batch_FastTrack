// In JavaScript, a lexical environment is an internal data structure that stores variable and function identifiers based on their physical placement in the source code.
function outer()
{
    let count = 0;

    function inner()
    {
        count++;
        console.log(count)
    }

    return inner
}

let ans1  = outer()
ans1()
ans1()
ans1()

let ans2 = outer()