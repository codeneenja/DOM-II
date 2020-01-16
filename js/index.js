// Your code goes here
//mouse event

// one
const navigation = document.querySelector('.nav-container');
navigation.addEventListener('mouseenter', () => {
    navigation.style.border='2px solid hotpink'
})
//two
const page = document.querySelector('.intro');

page.addEventListener('click', () => {
    page.style.backgroundColor='lightblue';
})

//three
const imgGrow = document.querySelectorAll('.img-content').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.border= '2px solid green';
        
    })
})
//four
const intro = document.querySelectorAll('.text-content').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color='red'
    })
})
//five
document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1.3)'
    })
})
//six
const scroll = document.getElementsByName('h2').forEach(el => {
    el.addEventListener('scroll', () => {
        el.style.color='yellow'
    })
})

