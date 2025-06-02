fetch("tags.json")
  .then((response) => response.json())
  .then((data) => {
    const divs = document.querySelectorAll("div.tag");

    divs.forEach((div) => {
      const key = div.getAttribute("title");

      if (data[key]) {
        const newHTML = `
              <div class="tech-tag">
                <img src="${data[key]}" alt="${key}" />
                <p>${key}</p>
              </div>
            `;

        div.innerHTML = newHTML;
      }
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
