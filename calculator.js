const shoOneNum = document.querySelector(".show-1");
const shoTwoNum = document.querySelector(".show-2");
const resultShow = document.querySelector(".result-show");
const numbersEl = document.querySelectorAll(".number");
const sign = document.querySelectorAll(".sign");
const equalEl = document.querySelector(".equal");
const clea1Num = document.querySelector(".clea-1Num");
const clearAllEl = document.querySelector(".all-clear");

let dis1Num = "";
let dis2Num = "";
let result = "";
let lastOperation = "";
let haveDot = false;
let x = 0;

numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = false;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        shoTwoNum.innerText = dis2Num;
    });
});

sign.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!shoOneNum) return;
        haveDot = false;

        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = +dis2Num;
        }
        clearVar(operationName);
        lastOperation = operationName;
    });
});

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name;
    shoOneNum.innerText = dis1Num;
    shoTwoNum.innerText = "";
    dis2Num = "";
    resultShow.innerText = result;
}

equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    shoTwoNum.innerText = result;
    resultShow.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

function mathOperation() {
    if (lastOperation === "/") {
        result = result / +dis2Num;
        if (result === Infinity) {
            result = "";
            dis2Num = x;
            dis1Num = x;
        }
    }
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
    123;
}

clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    shoOneNum.innerText = 0;
    shoTwoNum.innerText = "";
    result = x;
    resultShow.innerText = x;
});

clea1Num.addEventListener("click", () => {
    shoTwoNum.innerText = "";
    dis2Num = "";
});