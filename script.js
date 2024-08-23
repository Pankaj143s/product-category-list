document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from json
  fetch('product-list.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data);


      // Component one rendering

      // render heading
      const comp1 = document.querySelector('#component-one .card-container');

      //render card
      data.component1.items.forEach(item => {
        const newCard = `
                <div class="card">
          <div class="card-img">
            <img
              src="${item.img}"
              alt=""
            />
            <button>${item.name}</button>
          </div>
        </div>
                
                
                
                `;
        comp1.insertAdjacentHTML('beforeend', newCard);

      });




      // Component one rendering end


      // Component two rendering----------
      const comp2 = document.querySelector('#component-two .card-container');

      data.component2.items.forEach(item => {
        const cardHTML =
          `   <div class="card">
                 <div class="card-img">
                   <img
                     src="${item.img}"
                     alt=""
                   />
                   <p>${item.name}</p>
                 </div>
               </div>`;
        comp2.insertAdjacentHTML('beforeend', cardHTML);
      })
      // Component two rendering end----------

      // Component three rendering----------
      const comp3 = document.querySelector('#component-three .card-container')
      data.component3.items.forEach(item => {
        const cardHTML = `
                
                 <div class="card">
          <div class="card-img">
            <img
              src="${item.img}"
              alt=""
            />
            <div class="view-more">
              <p>${item.name}</p>
              <span
                ><button>View More</button>
                <i class="ri-arrow-right-s-line"></i>
              </span>
            </div>
          </div>
        </div>
                `;

        comp3.insertAdjacentHTML('beforeend', cardHTML);
      })
      // Component three rendering end----------

      // Component four rendering----------
      const comp4 = document.querySelector('#component-four .card-container');

      data.component4.items.forEach(item => {

        const cardHTML = `
                 <div class="card">
          <div class="card-img">
            <img
              src="${item.img}"
              alt=""
            />
          </div>
          <div class="view-more">
            <p>${item.name}</p>
            <span
              ><button>View More</button>
              <i class="ri-arrow-right-s-line"></i>
            </span>
          </div>
        </div>
                `;
        comp4.insertAdjacentHTML('beforeend', cardHTML);


      })

      // Component four rendering end----------
      // Component five rendering----------
      const comp5 = document.querySelector('#component-five .card-container')

      data.component5.items.forEach(item => {

        const cardHTML = `
                 <div class="card">
          <div class="card-img">
            <img
              src="${item.img}"
              alt=""
            />
            <p>${item.name}</p>
          </div>
        </div>  
                `;

        comp5.insertAdjacentHTML('beforeend', cardHTML)

      })


      // Component five rendering----------



    })
  // fetching data end

  console.log("DOM fully loaded and parsed");
});