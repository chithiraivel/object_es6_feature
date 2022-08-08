const person = [

    {
        Name: 'vel',
        age: 24,
        id: 1,
        quantity: {
            unit: 1,
            price: 50
        }
    },

    {
        Name: 'rahul',
        age: 24,
        id: 2,
        quantity: {
            unit: 1,
            price: 50
        }


    },

    {
        Name: 'muthu',
        age: 24,
        id: 3,
        quantity: {
            unit: 1,
            price: 50
        }
    },

    {
        Name: 'leo',
        age: 24,
        id: 4,
        quantity: {
            unit: 1,
            price: 50
        }

    },
    {
        Name: 'mari',
        age: 24,
        id: 5,
        quantity: {
            unit: 1,
            price: 50
        }
    },

    {
        Name: 'alphanse',
        age: 24,
        id: 6,
        quantity: {
            unit: 1,
            price: 50
        }
    }
]

let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let remove1 = document.querySelector('#remove1')
let show = document.querySelector('#show')



var items = [];
function click_btn() {

    let value1 = input.value;
    
    person.map((data) => {

        if (value1 == data.id) {
           
            if(items.includes(data) == true){

                data.quantity.unit = data.quantity.unit + 1;
            }
            else{

                items.push(data);
            }
        }
    })
}
btn.addEventListener('click', click_btn)

function show_btn(){
   console.log(items);
}
show.addEventListener('click',show_btn);

remove1.addEventListener('click' , () => {
    let value1 = input.value;
    let a =items.filter( (data) => {

        return value1 != data.id;
    })
    items =a;
} );