const addValue =(a,b) =>{

    const aValue = a.trim();
    const bValue = b.trim().toUpperCase();
    const add  = aValue+bValue;
    console.log("add =", add);

}

addValue('hello','world');