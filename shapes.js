class Shape{
    constructor(shape, color, text, textcolor){
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.textcolor = textcolor;
    }
    render(){
        return '';
    }
}

class Square extends Shape{
    render(){
        return `<svg width="100" height="100">
        <rect width="100" height="100" fill="${this.color}"/>
        <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}

class Circle extends Shape{
    render(){
        return `<svg width="100" height="100">
        <circle cx="50" cy="50" r="50" fill="${this.color}"/>
        <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<svg width="100" height="100">
        <polygon points="50,0 100,100 0,100" fill="${this.color}"/>
        <text x="50" y="50" text-anchor="middle" dominant-baseline="middle fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}


function generateShape(shape, color, text, textcolor){
   if(shape === 'square'){
       return new Square(shape, color, text, textcolor).render();
    } else if(shape === 'circle'){
        return new Circle(shape, color, text, textcolor).render();
    } else if(shape === 'triangle'){
        return new Triangle(shape, color, text, textcolor).render();
    }
}

module.exports = generateShape;