import React, { Fragment, useState, useEffect } from 'react';
import MeatsAndSeafood from '../images/meatsseafood.png';
import BakingGoods from '../images/bakinggoods.png';
import CannedGoods from '../images/canned.png';
import CondimentsAndSpices from '../images/condimentsspices.png';
import CleaningAndHygene from '../images/cleaningandbath.png';
import Dairy from '../images/dairy.png';
import Drinks from '../images/drinks.png';
import Fruits from '../images/fruits.jpg';
import Vegetables from '../images/vegetables.png';
import Pharmacy from '../images/pharmacy.png';
import Snacks from '../images/snacks.png';
import Other from '../images/other.png';
import '../components/components.css';
import { Row, Col, Container } from 'react-bootstrap';
import ListProducts from './ListProducts';
import RemoveIcon from '@material-ui/icons/Remove';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Swal from 'sweetalert2';
import printJS from 'print-js';
import { Tooltip } from '@material-ui/core';

function Products() {
  const [visibility, changeVisibility] = useState(true);
  const [activeSection, setActiveSection] = useState({});
  const [total, setTotal] = useState(0);
  const [listItems, updateListItems] = useState([]);
  const [products, updateProducts] = useState([{
    id: 1,
    name: 'Meat and Seafood',
    imgSrc: MeatsAndSeafood,
    hovered: false,
    list: [{
      id: 1,
      name: 'Sausages',
      price: 100
    },
    {
      id: 2,
      name: 'Ribs',
      price: 100
    },
    {
      id: 3,
      name: 'Hamburguers',
      price: 100
    },
    {
      id: 4,
      name: 'Ham',
      price: 100
    },
    {
      id: 5,
      name: 'Salmon',
      price: 100
    },
    {
      id: 6,
      name: 'Steak',
      price: 100
    },
    {
      id: 7,
      name: 'Salami',
      price: 100
    }],
  },
  {
    id: 2,
    name: 'Baking Goods',
    imgSrc: BakingGoods,
    hovered: false,
    list: [{
      name: 'Spaghetti',
      price: 100
    },
    {
      id: 1,
      name: 'Loaf',
      price: 100
    },
    {
      id: 2,
      name: 'Ravioli',
      price: 100
    },
    {
      id: 3,
      name: 'Cake',
      price: 100
    },
    {
      id: 4,
      name: 'Pizza',
      price: 100
    }],
  },
  {
    id: 3,
    name: 'Canned Goods',
    imgSrc: CannedGoods,
    hovered: false,
    list: [{
      id: 1,
      name: 'Tuna',
      price: 100
    },
    {
      id: 2,
      name: 'Beans',
      price: 100
    },
    {
      id: 3,
      name: 'Chickpeas',
      price: 100
    },
    {
      id: 4,
      name: 'Corn',
      price: 100
    }],
  },
  {
    id: 4,
    name: 'Condiments',
    imgSrc: CondimentsAndSpices,
    hovered: false,
    list: [{
      id: 1,
      name: 'Salt',
      price: 100
    },
    {
      id: 2,
      name: 'Sugar',
      price: 100
    },
    {
      id: 3,
      name: 'Garlic and Parsley',
      price: 100
    },
    {
      id: 4,
      name: 'Cumin',
      price: 100
    },
    {
      id: 5,
      name: 'Ground Chili',
      price: 100
    }],
  },
  {
    id: 5,
    name: 'Cleaning and Hygene',
    imgSrc: CleaningAndHygene,
    hovered: false,
    list: [{
      id: 1,
      name: 'Toilet Paper',
      price: 100
    },
    {
      id: 2,
      name: 'Soap',
      price: 100
    },
    {
      id: 3,
      name: 'Detergent',
      price: 100
    },
    {
      id: 4,
      name: 'Napkins',
      price: 100
    },
    {
      id: 5,
      name: 'Shampoo and Conditioner',
      price: 100
    },
    {
      id: 6,
      name: 'Sponge',
      price: 100
    }],
  },
  {
    id: 6,
    name: 'Dairy',
    imgSrc: Dairy,
    hovered: false,
    list: [{
      id: 1,
      name: 'Milk',
      price: 100
    },
    {
      id: 2,
      name: 'Cheese',
      price: 100
    },
    {
      id: 3,
      name: 'Yogurt',
      price: 100
    },
    {
      id: 4,
      name: 'Ice Cream',
      price: 100
    },
    {
      id: 5,
      name: 'Butter',
      price: 100
    },
    {
      id: 6,
      name: 'Milk cream',
      price: 100
    },
    {
      id: 7,
      name: 'Eggs',
      price: 100
    }],
  },
  {
    id: 7,
    name: 'Drinks',
    imgSrc: Drinks,
    hovered: false,
    list: [{
      id: 1,
      name: 'Juice',
      price: 100
    },
    {
      id: 2,
      name: 'Coffee',
      price: 100
    },
    {
      id: 3,
      name: 'Tea',
      price: 100
    },
    {
      id: 4,
      name: 'Yerba',
      price: 100
    },
    {
      id: 5,
      name: 'Wine',
      price: 100
    },
    {
      id: 6,
      name: 'Beer',
      price: 100
    },
    {
      id: 7,
      name: 'Champagne',
      price: 100
    }],
  },
  {
    id: 8,
    name: 'Fruits',
    imgSrc: Fruits,
    hovered: false,
    list: [{
      id: 1,
      name: 'Avocados',
      price: 100
    },
    {
      id: 2,
      name: 'Strawberrys',
      price: 100
    },
    {
      id: 3,
      name: 'Bananas',
      price: 100
    },
    {
      id: 4,
      name: 'Apples',
      price: 100
    },
    {
      id: 5,
      name: 'Pears',
      price: 100
    },
    {
      id: 6,
      name: 'Plums',
      price: 100
    },
    {
      id: 7,
      name: 'Grapes',
      price: 100
    },
    {
      id: 8,
      name: 'Kiwis',
      price: 100
    },
    {
      id: 8,
      name: 'Lemons',
      price: 100
    }],
  },
  {
    id: 9,
    name: 'Pharmacy',
    imgSrc: Pharmacy,
    hovered: false,
    list: [{
      id: 1,
      name: 'Ibuprofen',
      price: 100
    },
    {
      id: 2,
      name: 'Band aids',
      price: 100
    },
    {
      id: 3,
      name: 'Taphyrol',
      price: 100
    }],
  },
  {
    id: 10,
    name: 'Snacks',
    imgSrc: Snacks,
    hovered: false,
    list: [{
      id: 1,
      name: 'Cookies',
      price: 100
    },
    {
      id: 2,
      name: 'Oatmeal Squares',
      price: 100
    },
    {
      id: 3,
      name: 'Chips',
      price: 100
    },
    {
      id: 4,
      name: 'Alfajores',
      price: 100
    }],
  },
  {
    id: 11,
    name: 'Vegetables',
    imgSrc: Vegetables,
    hovered: false,
    list: [{
      id: 1,
      name: 'Lettuce',
      price: 100
    },
    {
      id: 2,
      name: 'Spinach',
      price: 100
    },
    {
      id: 3,
      name: 'Onions',
      price: 100
    },
    {
      id: 4,
      name: 'Pepper',
      price: 100
    },
    {
      id: 5,
      name: 'Carrot',
      price: 100
    },
    {
      id: 6,
      name: 'Broccoli',
      price: 100
    },
    {
      id: 7,
      name: 'Pumpkin',
      price: 100
    },
    {
      id: 8,
      name: 'Potato',
      price: 100
    },
    {
      id: 9,
      name: 'Asparagus',
      price: 100
    },
    {
      id: 10,
      name: 'Tomato',
      price: 100
    },
    {
      id: 11,
      name: 'Lemons',
      price: 100
    }],
  },
  {
    id: 12,
    name: 'Other',
    imgSrc: Other,
    hovered: false,
    list: []
  }]);
  const [activeOtherProducts, updateOtherProducts] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('activeOtherProducts');
    if (localData) {
      updateOtherProducts(JSON.parse(localData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('activeOtherProducts', JSON.stringify(activeOtherProducts))
  }, [activeOtherProducts]);

  function onClick(product) {
    changeVisibility(!visibility);
    setActiveSection(product);
  }

  function onClickBack() {
    changeVisibility(!visibility);
  }

  function setListItem(ListItem) {
    setTotal(total + ListItem.price);
    updateListItems([...listItems, ListItem]);
  }

  function setOtherItem(input, input2) {
    if (input && input2) {
      var newProduct = new Object();
      newProduct.name = input.charAt(0).toUpperCase() + input.slice(1);
      newProduct.price = parseInt(input2);
      setListItem(newProduct);
      const Item = { id: 1, name: newProduct.name, price: newProduct.price };
      updateOtherProducts([...activeOtherProducts, Item]);
    } else {
      Swal.fire({
        titleText: 'Must write product name and price :)',
        icon: 'warning',
        iconColor: "#FF4A49",
        confirmButtonColor: "#FF4A49",
      });
    }
  }

  function setHover(id, newStatus) {
    const newProduct = products.map(product => {
      if (product.id === id) {
        product.hovered = newStatus
      }
      return product;
    })
    updateProducts(newProduct);
  }

  function clearAll() {
    Swal.fire({
      title: 'Are you sure you want to delete your SuperList?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      denyButtonColor: "#FF4A49",
      confirmButtonColor: "#57CC0F"
    }).then((result) => {
      if (result.isConfirmed) {
        setTotal(0);
        updateListItems([]);
      }
    })
  }

  function restListItem(item) {
    const array = [...listItems];
    const index = array.findIndex(d => d.id === item.id);
    array.splice(index, 1);
    setTotal(total - item.price);
    updateListItems(array);
  }

  function deleteOtherItem(item) {
    Swal.fire({
      title: 'Are you sure you want to delete this product?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      denyButtonColor: "#FF4A49",
      confirmButtonColor: "#57CC0F"
    }).then((result) => {
      if (result.isConfirmed) {
        const array = [...activeOtherProducts];
        const index = array.findIndex(d => d.id === item.id);
        array.splice(index, 1);
        updateOtherProducts(array);
      }
    })
  }

  function doneModal() {
    const totalDone = total.toString();
    const text = listItems.map(item => `<p>${item.name} $${item.price}</p> `).join(' ') + `<p style="font-style: italic; font-weight: bold;">Total: $${totalDone}</p>`;
    const textToCopy = listItems.map(item => item.name + ' $' + item.price).join("\n") + `\nTotal: $${totalDone}`;

    Swal.fire({
      title: '<p style="color: #FF4A49; font-weight: bold;">Super List<p>',
      html: text,
      width: 600,
      confirmButtonText: 'Copy to clipboard',
      denyButtonText: 'Print',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "#57CC0F",
      denyButtonColor: "#FF4A49"
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(textToCopy);
        Swal.fire(
          'Copied!',
          'Your list has been copied.',
          'success'
        )
      }
      else if (result.isDenied) {
        printJS({
          printable: listItems,
          properties: [{ field: 'name', displayName: 'Products' },
          { field: 'price', displayName: 'Prices' }],
          header: '<h2>My SuperList</h2>',
          type: 'json',
          gridHeaderStyle: 'color: #FF4A49;  border: 1px solid ##242424;'
        });
      }
    })
  }

  return (
    <Container>
      <Row className="approw justify-content-between align-items-center">
        <Col xs={8} className="colrow">
          <Row className={visibility === true ? 'Products justify-content-center' : 'Section'}>
            <Fragment>
              {visibility === true ? (
                <Fragment>{
                  products.map(product =>
                    <div className="product">
                      <div className={"product-section "}>  
                        <span>{product.name}</span>
                      </div>
                      <img src={product.imgSrc}
                        alt={product.name}
                        onMouseOver={() => setHover(product.id, true)}
                        onMouseLeave={() => setHover(product.id, false)}
                        onClick={() => onClick(product)}
                        className="img-responsive section" />
                    </div>
                  )}
                </Fragment>) :
                (<ListProducts activeSection={activeSection} onClickBack={onClickBack} setListItem={setListItem} setOtherItem={setOtherItem}
                  activeOtherProducts={activeOtherProducts} deleteOtherItem={deleteOtherItem} />)}
            </Fragment>
          </Row>
        </Col>
        <Col xs={4} className="colrow">
          <div className="SuperList">
            <header className="superlistheader">
              <h2 className="supertitle">Super List{listItems.length !== 0 ? (<Tooltip title="Clear" placement="right"><ClearAllIcon className="removebutton" onClick={() => clearAll()}/></Tooltip> ) : ''}</h2>
            </header>
            <div className="listItems">
              {listItems ? (listItems.map(item =>
                <div className="itemList">
                  <Col className="d-flex justify-content-center centrar">{item.name}</Col>
                  <Col className="d-flex justify-content-center centrar">${item.price}</Col>
                  <Col className="d-flex-justify-content-center minus centrar" >
                    <AddIcon className="addbutton" onClick={() => setListItem(item)} />
                    <RemoveIcon className="removebutton" onClick={() => restListItem(item)} />
                  </Col>
                </div>
              )) : (<p></p>)}
              <div className="total p-3">
                <Col className="totaltitle">
                  {total !== 0 ?
                    (<Row className="total-row"><Col xs={7} className="total-title">Total $ {total}</Col>
                      <div><Tooltip title="Done!" placement="top"><AssignmentTurnedInIcon fontSize="medium" className="done-button" onClick={() => doneModal()} /></Tooltip></div></Row>
                    ) :
                    ('Select items to add!')}
                </Col>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Products;