function getQuizEstimation(count, num) {
    if (count == 0)
        return "minute or so";
    
    if (num > 60)
        num = 60;

    let estimate = count * num;

    return estimate + " minute" + (estimate == 1 ? "" : "s");
}

function setQuizEstimations() {
    let elements = document.querySelectorAll("span[id^='estimation-']");
    console.log("hi");
    elements.forEach(function(element) {
        element.textContent = getQuizEstimation(element.dataset.count, 2);
    });
}

setQuizEstimations();