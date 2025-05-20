interface Product {
    name: string;
    price: number;
}

class Store<T> {
   //private _objects: T[] = [];
   protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    } 

    // T is a Product
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
         return this._objects.find(obj => obj[property] === value);
    } 

}

//Pass on Generic Type Parameter:
class CompressibleStore<T> extends Store<T>{
    compress(){}
}

let store = new CompressibleStore<Product>();
store.compress();
store.add

//Restrict the Generic Type Parameter:
class SearchableStore<T extends {name: string}> extends Store<T>{
    finds(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

//Fix or Terminate the Generic Type Parameter
// class ProductStore extends Store<Product>{
//     filterByCategory(category: string): Product[]{
//         return [];
//     }
// }