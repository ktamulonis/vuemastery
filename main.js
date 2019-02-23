var app = new Vue({
  el: '#app', 
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpg',
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["Small", "Meduim", "Large", "Extra Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
}) 
