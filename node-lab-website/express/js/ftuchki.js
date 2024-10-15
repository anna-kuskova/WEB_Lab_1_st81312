const divi = document.getElementById('additional_div');
console.log(divi)

divi.addEventListener('mouseover', function() {
    divi.style.backgroundColor = 'gray'; 
});

divi.addEventListener('mouseout', function() {
    divi.style.backgroundColor = 'black';
});