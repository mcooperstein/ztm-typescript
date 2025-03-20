/* eslint-disable */
import { strict as assert } from "assert";

// Interfaces provide a way to define the shape of objects or classes. They
// define the contracts that objects must follow, specifying the properties and
// methods that an object must have. Interfaces make it easier to write
// type-safe code by providing a way to ensure that objects are of the correct
// shape before they are used in a program. They also allow for code to be more
// modular and reusable, since objects can be easily swapped out as long as
// they adhere to the interface's contract.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
//

interface Area {
    area(): number;
}

interface Perimeter {
    perimiter(): number;
}

class Rectangle implements Area {
    length: number = 2;
    width: number = 4;

    area(): number {
        return this.length * this.width;
    }

    perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
    radius: number = 4;

    area(): number {
        return Math.PI * this.radius;
    }

    perimiter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const rect = new Rectangle();
const circ = new Circle();

const objectsWithArea: Area[] = [rect,circ];

for(let i = 0; i<objectsWithArea.length; i++) {
    console.log(objectsWithArea[i].area());
}

interface CustomerInfo {
    name: string;
}

class Customer implements CustomerInfo {
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

// prefer interface for object types
interface Address {
    street: string;
    city: string;
}

type LocalAddress = {
    street: string;
    city: string;
}

const addr = {
    street: 'name',
    city: 'sample'
}