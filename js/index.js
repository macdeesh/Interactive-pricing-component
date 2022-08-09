
const sliderRange = document.getElementById("myRange");
const sliderClass = document.querySelector(".slider");
const pageViews = document.querySelector(".views");
const amountPerMonth = document.querySelector(".amount")
const numbersOfViews = [10, 50, 100, 500, 1];
const amounts = [8, 12, 16, 24, 36];
const toggleSwitch = document.querySelector(".toggle-checkbox");


amountPerMonth.innerHTML = "$" + amounts[0] + ".00"; // default value.

toggleSwitch.addEventListener("change", function () { // when switching toggle before moving the range bar.
    let value = 0; // first value of the Array amounts.
    amountValue(value); // monthly or yearly.
})


sliderRange.oninput = function () { 

    var value = this.value - 1; 
    // As the range slider is not stating from zero: the first value is 1 for the index[0] of the arrays.
    var colorValue = this.value * 20; // 20 for percentage of the linear gradient.
    var color = 'linear-gradient(90deg, var(--Soft-Cyan)' + colorValue + '%, var(--Light-Grayish-Blue-bar)' + colorValue + '%)';
    sliderClass.style.background = color; // change the css background property every time color value change.

    if (value >= 0 && value < 4) {
        pageViews.innerHTML = numbersOfViews[value] + "K";
    } else if (value == 4) {// 100% range bar
        pageViews.innerHTML = numbersOfViews[value] + "M";
        sliderClass.style.background = "linear-gradient(90deg, var(--Strong-Cyan)100%, var(--Soft-Cyan) 0%)";
    }

    if (this.value == 0) {//  Limit the range bar first  value to 1 instead of zero.
        this.value = 1;
        sliderClass.style.background = "linear-gradient(90deg, var(--Soft-Cyan) 20%, var(--Light-Grayish-Blue-bar)20%)";
    } else amountValue(value);

    toggleSwitch.addEventListener("change", function () { 
        // Switching the toggle after moving the slider range for the first time.
        if (value < 0) 
        // Limit the slider to the value 1 instead of zero for the yearly discount otherwise the number will be negative.
            value = 0;
        amountValue(value);// change from monthly to yearly and vice-versa.
    })

}

function amountValue(value) {// discount function for the toggle.
    if (toggleSwitch.checked)
        amountPerMonth.innerHTML = "$" + amounts[value] * 0.75 + ".00";
    else
        amountPerMonth.innerHTML = "$" + amounts[value] + ".00";
}
