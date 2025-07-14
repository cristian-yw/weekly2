function divideAndSort(number){
    const divide = number.toString().split("0");

    const sortpart = divide.map(divide => {
        return divide
            .split("")
            .sort((a,b)=> a - b)
            .join("");

    });
    const result = sortpart.join("");
    
    return Number(result);
}

export default divideAndSort;
