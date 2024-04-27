const menu = [
  {
    title: 'Scrambled Eggs',
    category: 'breakfast',
    price: 8.99,
    img: 'item1.jpg',
    description: 'Fluffy scrambled eggs, a breakfast classic.'
  },
  {
    title: 'Oatmeal with Berries',
    category: 'breakfast',
    price: 6.50,
    img: 'item2.jpg',
    description: 'Hearty oatmeal topped with fresh berries and nuts.'
  },
  {
    title: 'Pancakes with Syrup',
    category: 'breakfast',
    price: 7.25,
    img: 'item3.jpg',
    description: 'Stack of buttermilk pancakes drizzled with maple syrup.'
  },
  {
    title: 'Grilled Chicken Salad',
    category: 'lunch',
    price: 10.75,
    img: 'item4.jpg',
    description: 'Chilled salad with grilled chicken, vegetables, and light dressing.'
  },
  {
    title: 'Tuna Sandwich',
    category: 'lunch',
    price: 8.25,
    img: 'item5.jpg',
    description: 'Classic tuna salad sandwich on toasted bread.'
  },
  {
    title: 'Soup and Salad Combo',
    category: 'lunch',
    price: 9.50,
    img: 'item6.jpg',
    description: 'Choice of soup with a side salad for a light lunch.'
  },
  {
    title: 'Spaghetti with Meat Sauce',
    category: 'dinner',
    price: 12.99,
    img: 'item7.jpg',
    description: 'Classic spaghetti dish with savory meat sauce.'
  },
  {
    title: 'Baked Salmon with Roasted Vegetables',
    category: 'dinner',
    price: 15.25,
    img: 'item8.jpg',
    description: 'Healthy and delicious baked salmon with roasted vegetables.'
  },
  {
    title: 'Chicken Stir-Fry',
    category: 'dinner',
    price: 13.75,
    img: 'item9.jpg',
    description: 'Savory chicken stir-fry with rice and vegetables.'
  },
  {
    title: 'Cheeseburger with Fries',
    category: 'dinner',
    price: 11.50,
    img: 'item10.jpg',
    description: 'Classic cheeseburger served with a side of french fries.'
  }
];

const menu_container = document.querySelector('.menu_container');

const btn_container = document.querySelector('.btn_container');


//loads windows 
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);

  //button loads
  displayButtonItems(menu);

  //selects button

  selectBtn()
})



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(
    function (item) {
      return `<article class="menu">
      <img class="img"  src="${item.img}" alt="food image">
      <div class="menu_content">
        <div class="title_sec poppins-semibold">
          <h6 class="title">
            ${item.title}
          </h6>
          <div class="price">
            $${item.price}
          </div>
        </div>

        <div class="description poppins-regular">
          ${item.description}
        </div>
      </div>
    </article>`
    }
  )

  displayMenu = displayMenu.join("");

  menu_container.innerHTML = displayMenu;
}


function displayButtonItems(menuItems) {
  const button_category = menuItems.reduce(function (values, item) {

    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ['all'])

  let displayButtton = button_category.map(
    function (btn) {
      return `
      <button class="btn poppins-regular ${btn}" data-id="${btn}">
        ${btn}
      </button>
      `
    }
  ).join("")
  btn_container.innerHTML = displayButtton;


}



//filter items
 function selectBtn() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(
      function (btn) {
        btn.addEventListener('click', function(e) {
          const category = e.currentTarget.dataset.id;
    
          const menuCategory = menu.filter(function (menuItems) {
            if (menuItems.category == category) {
              return menuItems
            }
          })
    
          if (category == 'all') {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory)
          }
        })
      }
    )
  }