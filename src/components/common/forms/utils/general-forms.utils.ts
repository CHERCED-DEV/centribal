import { ProductsConfig } from "@/pages/api/products/db/products.utils";
import { UseFormReturn, UseFormWatch } from "react-hook-form";

export interface FormsDataProps {
  forms: FromsConfig;
  product?:ProductsConfig
}
export interface FromsConfig {
  title: string;
  general_form: EditProductConfig | CreateProductConfig | CreateOrderConfig;
  method: string;
}
//forms logic
export interface ClientFlieldsConfig {
  value: string;
  required: boolean;
  type: any;
}
export interface CustomInputForm {
  field: ClientFlieldsConfig;
  register: UseFormReturn<any>["register"];
  type: any;
  defaultValue?: string;
}
export interface GeneralFormsDataProps {
  data_forms: {
    form_title?: string;
    fields?: ClientFlieldsConfig[];
    product?: {
      title?: string;
      resume?: string;
    };
    addmore?: string;
    submit?: string;
  };
  products?: ProductsConfig[];
  product?:ProductsConfig
  method: string;
}
export type FormValues = { [key: string]: unknown };

//create order
export interface CreateOrderConfig {
  form_title: string;
  fields: ClientFlieldsConfig[];
  product: {
    title: string;
    resume: string;
  };
  addmore: string;
  submit: string;
}
// create product:
export interface CreateProductConfig
  extends Omit<CreateOrderConfig, "product" | "addmore"> {}

// edit product:
export interface EditProductConfig
  extends Omit<CreateOrderConfig, "fields"| "product" | "addmore"> {}

// create order UITLS:
export function getUniqueReferences<T>(arr: T[], key: keyof T) {
  const uniqueReferences = arr.filter((option, index, self) => {
    return self.findIndex((item) => item[key] === option[key]) === index;
  });
  return uniqueReferences;
}
export const handleAddToPurchase = (
  watch: UseFormWatch<any>,
  products: ProductsConfig[],
  setPurchase: React.Dispatch<React.SetStateAction<ProductsConfig[]>>
) => {
  const selectedProduct = watch("product");
  const productToAdd = products?.find(
    (product) => product._id === selectedProduct
  );
  if (productToAdd) {
    setPurchase((prevPurchase) => [...prevPurchase, productToAdd]);
  }
};
export const totalPrice = (purchase: ProductsConfig[]): number => {
  const total = purchase.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  return total;
};
export const totalTaxes = (purchase: ProductsConfig[]): number => {
  const total = purchase.reduce(
    (accumulator, item) => accumulator + item.taxes,
    0
  );
  return total;
};
export const totalOrder = (purchase: ProductsConfig[]): number => {
  const priceTotal = totalPrice(purchase);
  const taxesTotal = totalTaxes(purchase);
  const total = priceTotal + taxesTotal;
  return total;
};
export const randomNumOrder = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const result = Array.from(
    { length: 10 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
  return result;
};
export const generateRandomBoolean = () => Math.random() < 0.5;
export const validateAsNumber = (data: any) => {
  const orderValue = parseFloat(data as string);
  if (!isNaN(orderValue)) {
    return orderValue;
  }
  return 0;
};
export const calcOrderValue = (data: any) => {
  const orderValue = parseFloat(data.orderValue as string);
  if (!isNaN(orderValue)) {
    const total = orderValue + 25;
    return total;
  }
  return 0;
};
