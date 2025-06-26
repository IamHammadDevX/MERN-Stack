

function outerFunc() {
    let name = "Elon Mask";

    function innerFunc() {
        console.log("Name is:", name);
    }
    return innerFunc;
}

let res = outerFunc()
res()