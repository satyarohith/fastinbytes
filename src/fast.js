// Create <div id="manupulated"><h1></h1></div>
const div = document.createElement('div');
div.setAttribute('id', 'manupulated');
div.appendChild(document.createElement('h1'));

const container = document.querySelector(
  'body > div > div.speed-container.centered > div.speed-controls-container.centered'
);
container.appendChild(div);

function updateContent(mutationList) {
  for (const mutation of mutationList) {
    const resultElement = document.querySelector('#manupulated > h1');
    const speedUnit = document.querySelector('#speed-units').textContent;
    const speed = mutation.target.innerText;

    resultElement.innerHTML = `${(speed / 8).toFixed(2)} <sup>${
      speedUnit === 'Kbps' ? 'KB/s' : 'MB/s'
    }</sup>`;
  }
}

const observer = new MutationObserver(updateContent);

// Start observing the element.
const targetNode = document.querySelector('#speed-value');
observer.observe(targetNode, {
  childList: true
});
