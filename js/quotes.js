const quotes = [
    {
        quote: "\"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다\"",
        author: "앙드레 말로",
    },
    {
        quote: "\"내일이란 오늘의 다른 이름이다\"",
        author: "윌리엄 포크너",
    },
    {
        quote: "\"나는 날마다 모든 면에서 점점 좋아지고 있다\"",
        author: "애말쿠에",
    },
    {
        quote: "\"불가능한 일을 해보는 것은 신나는 일이다\"",
        author: "월트 디즈니",
    },
    {
        quote: "\"삶은 당신이 만드는 것이다 이전에도 그랬고 앞으로도 그럴 것이다\"",
        author: "그랜마 모세"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;