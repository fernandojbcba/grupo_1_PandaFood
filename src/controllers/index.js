const path = require("path");
const menus = [
  {
    id: 1,
    title: "Beijing Beef",
    category: "Main",
    description:
      "Crujientes tiras de res empanizadas, marinadas con pimiento rojo, cebolla y salsa dulce-picante.",
    image: "beijing_beef.jpg",
    price: 1300,
  },
  {
    id: 2,
    title: "Mongolian Pork",
    category: "Main",
    description:
      "Fajitas de cerdo marinadas con pimiento rojo, cebollín, champiñón y cebolla en una deliciosa salsa mongolian.",
    image: "BLACK-BEAN-PORK.jpg",
    price: 1100,
  },
  {
    id: 3,
    title: "Broccoli Beef",
    category: "Main",
    description: "Res marinada con brócoli, jengibre y salsa de soya.",
    image: "BROCCOLI-BEEF.jpg",
    price: 2450,
  },
  {
    id: 4,
    title: "Chow Mein",
    category: "Main",
    description: "Fideos de harina integral sazonados con cebolla, apio y col.",
    image: "CHOW-MEIN.jpg",
    price: 1250,
  },
  {
    id: 5,
    title: "Dumplings",
    category: "Appetizer",
    description: "Dumplings a la sartén, rellenos de pollo, repollo y cebolla.",
    image: "dumplings.jpg",
    price: 1520,
  },
  {
    id: 6,
    title: "Fried Rice",
    category: "Rice",
    description:
      "Arroz sazonado con salsa de ostión, huevo, chicharos y zanahorias.",
    image: "FRIED-RICE.jpg",
    price: 1350,
  },
  {
    id: 7,
    title: "Kung Pao Chicken",
    category: "Main",
    description:
      "Pollo marinado con cacahuate, pimiento rojo, calabaza y chile de árbol.",
    image: "KUNG-PAO-CHICKEN.jpg",
    price: 1120,
  },
  {
    id: 8,
    title: "Mixed Vegetables",
    category: "Vegetables",
    description: "Mezcla de brócoli, calabazas, zanahoras, ejotes y col.",
    image: "MIXED-VEGETABLES.jpg",
    price: 1420,
  },
  {
    id: 9,
    title: "Mongolian Beef",
    category: "Main",
    description:
      "Carne de res marinada cocinada al Wok con champiñones, chile pimiento rojo y cebollín y cebolla sazonada con salsa de ajo.",
    image: "MONGOLIAN-BEEF.jpg",
    price: 1560,
  },
  {
    id: 10,
    title: "Mushroom Chicken",
    category: "Main",
    description:
      "Pollo, setas y calabacín salteados al wok con salsa de soya y jengibre.",
    image: "MUSHROOM-CHICKEN.jpg",
    price: 1480,
  },
  {
    id: 11,
    title: "Orange Chicken",
    category: "Main",
    description:
      "Crujiente pollo sazonado con nuestra salsa agridulce y picante de naranja.",
    image: "ORANGE-CHICKEN.jpg",
    price: 1630,
  },
  {
    id: 12,
    title: "String Bean Chicken",
    category: "Main",
    description:
      "Pechuga de pollo, ejote y cebolla, sazonados con una suave salsa de soya y jengibre",
    image: "ORANGE-CHICKEN.jpg",
    price: 1630,
  },
  {
    id: 13,
    title: "VEGGIE NOODLE SOUP",
    category: "Main",
    description: "Sopa con vegetales y chow mein",
    image: "VEGGIE-NOODLE-SOUP.jpg",
    price: 1230,
  },
  {
    id: 14,
    title: "Rollos Primavera",
    category: "Main",
    description:
      "Repollo, apio, zanahorias, cebolla y fideos chinos en una envoltura crujiente de wonton",
    image: "VEGGIE-SPRING-ROLL.jpg",
    price: 1630,
  },
  {
    id: 15,
    title: "Arroz Blanco",
    category: "Main",
    description: "Arroz blanco al vapor",
    image: "WHITE-STEAMED-RICE.jpg",
    price: 1630,
  },
];

const controller = {
  home: (req, res) => {
    res.render("home", { menu: menus });
  },
  detalle: (req, res) => {
    let menuEncontrado = menus.find((menu) => menu.id == req.params.id);
    res.render("./products/detalleProducto", { menu: menuEncontrado });
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  registro: (req, res) => {
    res.render("./users/registro");
  },
  cart: (req,res)=>{
    res.render('./products/cart')
    },
};
module.exports = controller;
