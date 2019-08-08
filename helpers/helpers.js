const displayOnHtml = (text, page) => {
    const appDiv = document.getElementById('solution'+page);
    appDiv.innerHTML = `<p class="solution">${text}</p>`;  
  }

export {displayOnHtml};