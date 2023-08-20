const button = document.querySelector('button');
const quotes = document.querySelector('.quotes');

const msg = [
    "Every day is a new opportunity to make a positive change.",
    "Believe in yourself and your abilities.",
    "You have the power to create a beautiful life.",
    "Challenges are opportunities for growth.",
    "Smile often, it's contagious.",
    "Surround yourself with positivity and watch your life change.",
    "Your hard work will pay off in the end.",
    "You are capable of achieving greatness.",
    "Embrace the present moment and find joy in it.",
    "Kindness and compassion can make a big difference.",
    "Your future is full of endless possibilities.",
    "Success comes to those who never give up.",
    "Dream big and chase after your goals.",
    "You are unique and that is your strength.",
    "Focus on the things that bring you happiness.",
    "Stay strong, even when things get tough.",
    "A positive attitude can change everything.",
    "You are deserving of love and happiness.",
    "Small acts of kindness can have a big impact.",
    "Celebrate your progress, no matter how small.",
    "Keep moving forward, one step at a time.",
    "You are not defined by your past mistakes.",
    "Take time to appreciate the beauty around you.",
    "Your potential is limitless.",
    "Every setback is a setup for a comeback.",
    "Happiness is a choice, so choose it.",
    "You are stronger than you think.",
    "Stay patient and trust the journey.",
    "Your actions inspire others more than you realize.",
    "Stay true to yourself and follow your heart.",
    "Success begins with self-belief.",
    "You are a source of light in the world.",
    "Positivity attracts positive outcomes.",
    "You have the power to overcome any obstacle.",
    "Spread love and positivity wherever you go.",
    "Your efforts are not in vain.",
    "Believe in your dreams and pursue them fearlessly.",
    "Every day is a chance to start anew.",
] 

button.addEventListener('click',()=>{
    quotes.innerHTML = msg[Math.floor(Math.random()*msg.length)];
})



