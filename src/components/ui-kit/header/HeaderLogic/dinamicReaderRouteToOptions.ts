import { ListItems } from "@/pages/api/customCms/db/utils.interface";
// router dinamyc logic
export const dinamycReaderOptions = (
    pageClass: string,
    options: ListItems[]
): ListItems[] => {
    let optionToReplace: string = "";
    const homePath: ListItems = { title: "DashBoard", href: "/" };
    const newOptions = options.map((option) => ({ ...option }));

    switch (pageClass) {
        case "PRODUCTS-PAGE":
            optionToReplace = "Create Products";
        break;
        case "EDIT-PRODUCTS--PAGE":
            optionToReplace = "Edit Products";
        break;
        default:
        return options;
    }

    const index = newOptions.findIndex(
        (option) => option.title.trim() === optionToReplace.trim()
    );
    
    if (index >= 0) {
        newOptions[index] = homePath;
    }

    return newOptions;
};