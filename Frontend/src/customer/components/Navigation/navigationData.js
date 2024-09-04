export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id: 'tops', href: '/women/clothing/tops' },
            { name: 'Dresses', id: 'dresses', href: '/women/clothing/dresses' },
            { name: 'Women Jeans', id: 'women_jeans', href: '/women/clothing/women-jeans' },
            { name: 'Lengha Choli', id: 'lengha_choli', href: '/women/clothing/lengha-choli' },
            { name: 'Sweaters', id: 'sweaters', href: '/women/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirts', href: '/women/clothing/t-shirts' },
            { name: 'Jackets', id: 'jackets', href: '/women/clothing/jackets' },
            { name: 'Gowns', id: 'gowns', href: '/women/clothing/gowns' },
            { name: 'Sarees', id: 'sarees', href: '/women/clothing/sarees' },
            { name: 'Kurtas', id: 'kurtas', href: '/women/clothing/kurtas' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watches', href: '/women/accessories/watches' },
            { name: 'Wallets', id: 'wallets', href: '/women/accessories/wallets' },
            { name: 'Bags', id: 'bags', href: '/women/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasses', href: '/women/accessories/sunglasses' },
            { name: 'Hats', id: 'hats', href: '/women/accessories/hats' },
            { name: 'Belts', id: 'belts', href: '/women/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: 'full_nelson', href: '/brands/full-nelson' },
            { name: 'My Way', id: 'my_way', href: '/brands/my-way' },
            { name: 'Re-Arranged', id: 're_arranged', href: '/brands/re-arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: '/brands/counterfeit' },
            { name: 'Significant Other', id: 'significant_other', href: '/brands/significant-other' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurtas', href: '/men/clothing/mens-kurtas' },
            { name: 'Shirts', id: 'shirts', href: '/men/clothing/shirts' },
            { name: 'Men Jeans', id: 'men_jeans', href: '/men/clothing/men-jeans' },
            { name: 'Sweaters', id: 'sweaters', href: '/men/clothing/sweaters' },
            { name: 'T-Shirts', id: 't-shirts', href: '/men/clothing/t-shirts' },
            { name: 'Jackets', id: 'jackets', href: '/men/clothing/jackets' },
            { name: 'Shoes', id: 'shoes', href: '/men/clothing/shoes' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watches', href: '/men/accessories/watches' },
            { name: 'Wallets', id: 'wallets', href: '/men/accessories/wallets' },
            { name: 'Bags', id: 'bags', href: '/men/accessories/bags' },
            { name: 'Sunglasses', id: 'sunglasses', href: '/men/accessories/sunglasses' },
            { name: 'Hats', id: 'hats', href: '/men/accessories/hats' },
            { name: 'Belts', id: 'belts', href: '/men/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: 're_arranged', href: '/brands/re-arranged' },
            { name: 'Counterfeit', id: 'counterfeit', href: '/brands/counterfeit' },
            { name: 'Full Nelson', id: 'full_nelson', href: '/brands/full-nelson' },
            { name: 'My Way', id: 'my_way', href: '/brands/my-way' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/' },
    { name: 'Stores', href: '/' },
  ],
};
