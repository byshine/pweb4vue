import styles from './sass/styles.sass';

console.log("Hello World!");
const test = "Is babel smart?";
const templateLiteral = `${test}`;

async function testasync() {
    console.log("Hello World!");
}

const testArrow = () => {
    console.log("Test ARrow");
}

const newdiv = document.createElement('div');
const newcontent = document.createTextNode('hello world');
newdiv.appendChild(newcontent);
document.body.appendChild(newdiv);
console.log("GMRss?");
