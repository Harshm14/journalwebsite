const centcardcont = document.querySelector(".centcardcont");
const centcard = document.querySelectorAll(".centcard");
const width = centcard[0].offsetWidth + 25;
const arrbut = document.querySelectorAll(".arrow");
arrbut.forEach(btn => {
    btn.addEventListener("click", () => {
        centcardcont.scrollLeft += btn.id === "left" ? -width : width;
    })
})
let currindex = 1;
const progcardcont = document.querySelector(".progcardcont");
const progcard1 = document.querySelectorAll(".progcard");
const width2 = progcard1[0].offsetWidth+1;
const arrbut2 = document.querySelectorAll(".arrow1");
let intervalId;

arrbut2.forEach(btn => {
    btn.addEventListener("click", () => {
        // clearInterval(intervalId);

        currindex = btn.id === "left1" ? (currindex <= 1 ? currindex : currindex - 1) : (currindex >= progcard1.length - 2 ? currindex : currindex + 1);
        changecard(currindex);
        progcardcont.scrollLeft += btn.id === "left1" ? -width2 : width2;

        // const delay = 4000; 
        // intervalId = setInterval(() => {
        //     progcardcont.scrollLeft += currindex >= progcard1.length - 2 ? -9 * width2 : width2;
        //     currindex = currindex >= progcard1.length - 2 ? 1 : currindex + 1;
        //     changecard(currindex);
        // }, delay);
    });
});
const changecard = (currindex1) => {
    progcard1.forEach((card, index) => {
        card.classList.remove("active", "faded");

        if (index === currindex1) {
            card.classList.add("active");
        } else if (index === currindex1 + 1 || index === currindex1 - 1) {
            card.classList.add("active", "faded");
        }
    });
};
// const initialDelay = 4000; 
// intervalId = setInterval(() => {
//     progcardcont.scrollLeft += currindex >= progcard1.length - 2 ? -9 * width2 : width2;
//     currindex = currindex >= progcard1.length - 2 ? 1 : currindex + 1;
//     changecard(currindex);
// }, initialDelay);

let ques = document.querySelectorAll(".ques");
let ans = document.querySelectorAll(".ans");

function toggleAnswer(index) {
    const isActive = ques[index].classList.contains("active");

    for (let q of ques) {
        q.classList.remove("active");
    }

    if (!isActive) {

        ques[index].classList.add("active");
    }
}