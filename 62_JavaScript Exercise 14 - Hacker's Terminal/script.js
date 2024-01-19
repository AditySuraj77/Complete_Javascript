const ms_list = ['Initializing Hacking', 'Reading Files', 'Password files detected', 'Sending all passwords and personal files to the server', 'Cleaning up'];

const m1 = () => {
     let txt_1 = document.querySelector('.h1')
     let txt_2 = document.createElement('h1')
     txt_2.innerHTML = 'Initializing Hacking.'
     txt_1.append(txt_2)
}
const m2 = () => {
     let txt_1 = document.querySelector('.h1')
     let txt_2 = document.createElement('h1')
     txt_2.innerHTML = 'Reading Files..'
     txt_1.append(txt_2)
}
const m3 = () => {
     let txt_1 = document.querySelector('.h1')
     let txt_2 = document.createElement('h1')
     txt_2.innerHTML = 'Password files detected...'
     txt_1.append(txt_2)
}
const m4 = () => {
     let txt_1 = document.querySelector('.h1')
     let txt_2 = document.createElement('h1')
     txt_2.innerHTML = 'Sending all passwords and personal files to the server....'
     txt_1.append(txt_2)
}
const m5 = () => {
     let txt_1 = document.querySelector('.h1')
     let txt_2 = document.createElement('h1')
     txt_2.innerHTML = 'Cleaning up.....'
     txt_1.append(txt_2)
}

async function messages(ms_1) {
     setTimeout(() => {
          m1()

     }, 3000);

     setTimeout(() => {
          m2()

     }, 6000);
     setTimeout(() => {
          m3()

     }, 9000);
     setTimeout(() => {
          m4()

     }, 12000);
     setTimeout(() => {
          m5()

     }, 15000);
}

messages(m1)
