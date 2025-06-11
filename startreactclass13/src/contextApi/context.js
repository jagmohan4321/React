import { createContext } from "react";
export const sirGContext = createContext();
export const guidedBy = "Jagmohan"
export const arr = [2, 5, 78, 65];
export function printOrganizationName() {
    console.log("we are in same ORG")
}
export const user = {
    name: "Jagmohan Rai",
    mobile: "99999999999",
    printOrganizationName,
    guidedBy,
    arr
};