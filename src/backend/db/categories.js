import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "harry potter",
    description:
      "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. ",
  },
  {
    _id: uuid(),
    categoryName: "fantastic beasts",
    description:
      "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. ",
  },
];
