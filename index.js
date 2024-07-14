
// 1. Remove the <main> with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of newHeader
newHeader.textContent = 'Your-Name is the champion'; // Replace 'Your-Name' with your actual name

// 5. Append newHeader to the body (or any other desired location)
document.body.appendChild(newHeader);
