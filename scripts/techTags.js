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

    const row1 = document.querySelector(".marquee-row-1");
    const row2 = document.querySelector(".marquee-row-2");

    const tags = Object.entries(data).map(([key, value]) => {
      return `
        <div class="tech-tag">
          <img src="${value}" alt="${key}" />
          <p>${key}</p>
        </div>
      `;
    });

    // Split tags into two rows (alternating)
    const half = Math.ceil(tags.length / 2);
    row1.innerHTML = tags.slice(0, half).join("");
    row1.innerHTML = row1.innerHTML + row1.innerHTML;
    row2.innerHTML = tags.slice(half).join("");
    row2.innerHTML = row2.innerHTML + row2.innerHTML;
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
