const quotes = [
    {
        quote: "세상에서 가장 현명한 사람은 모든 사람으로부터 배우는 사람이다. 가장 사랑받는 사람은 칭찬하는 사람이다. 가장 강한 사람은 감정을 조절할 줄 아는 사람이다",
        author: "탈무드",
    },
    {
        quote: "내일이란 오늘의 다른 이름이다",
        author: "윌리엄 포크너",
    },
    {
        quote: "나는 날마다 모든 면에서 점점 좋아지고 있다",
        author: "애말쿠에",
    },
    {
        quote: "불가능한 일을 해보는 것은 신나는 일이다",
        author: "월트 디즈니",
    },
    {
        quote: "삶은 당신이 만드는 것이다 이전에도 그랬고 앞으로도 그럴 것이다",
        author: "그랜마 모세"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;