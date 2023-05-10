type PageClassMap = {
  [path: string]: string;
};

type mainClassMap = {
  [pageClass: string]: string;
};

export function pageClassDynamicBody(id: string): {
  pageClass: string;
  mainClass: string;
} {
  const ctx = id;
  let pageClass = "";
  let mainClass = "";

  // Assign class based on pathname
  const pageClassMap: PageClassMap = {
    "/editProduct/[_id]": "EDIT-PRODUCT--PAGE",
    "/editProduct": "EDIT-PRODUCTS--PAGE",
    "/createProduct": "PRODUCTS-PAGE",
    "/": "DASHBOARD-PAGE",
  };

  //Assign class based on pageClass
  const mainClassMap: mainClassMap = {
    "EDIT-PRODUCT--PAGE": "manage-product",
    "EDIT-PRODUCTS--PAGE": "edit-products",
    "PRODUCTS-PAGE": "main-products",
    "DASHBOARD-PAGE": "main-home",
  };

  if (pageClassMap[ctx]) {
    pageClass = pageClassMap[ctx]; // update the class based on the path
  }

  if (mainClassMap[pageClass]) {
    mainClass = mainClassMap[pageClass]; // update the class based on the path
  }

  return { pageClass, mainClass };
}
