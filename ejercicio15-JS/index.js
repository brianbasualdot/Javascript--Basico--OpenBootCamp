const name = 'Brian';
const lastName = 'Basualdo';

const info = {
    name: name,
    lastName: lastName
}
sessionStorage.setItem('info', JSON.stringify(info));
localStorage.setItem('info', JSON.stringify(info));


document.cookie = "nombreCookie=Brian Basualdo";
document.cookie = "nombreCaducidad=Brian Basualdo; expires=" + new Date(now.getTime() + 2 * 60000) ;
