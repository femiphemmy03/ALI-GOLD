// Mock product catalogue for the ALI-GOLD demo.
// Images use a generic placeholder service tinted per category — swap with real photos later.

const placeholder = (seed, bg) =>
  `https://placehold.co/400x400/${bg}/211D1A?text=${encodeURIComponent(seed)}&font=poppins`;

export const categories = [
  { id: 'groceries', name: 'Groceries', icon: '🛒' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'household', name: 'Household', icon: '🧺' },
  { id: 'wellbeing', name: 'Wellbeing', icon: '💊' },
  { id: 'foodstuffs', name: 'Food Stuffs', icon: '🌾' },
];

export const products = [
  // Drinks
  { id: 1, name: 'Coca-Cola (35cl)', category: 'drinks', price: 100, unit: '1 bottle', description: 'Ice-cold classic Coca-Cola in the regular 35cl bottle. A reliable favourite for any meal or gathering.', img: placeholder('Coca-Cola', 'F4E9DC') },
  { id: 2, name: 'Pepsi (35cl)', category: 'drinks', price: 100, unit: '1 bottle', description: 'Refreshing Pepsi cola, 35cl bottle. Crisp, fizzy and perfectly chilled.', img: placeholder('Pepsi', 'F4E9DC') },
  { id: 3, name: 'Five Alive Juice (1L)', category: 'drinks', price: 1200, unit: '1 carton', description: 'Five Alive fruit juice blend, 1 litre. A vitamin-rich refresher for the whole family.', img: placeholder('Five+Alive', 'F4E9DC') },
  { id: 4, name: 'Eva Water (75cl)', category: 'drinks', price: 200, unit: '1 bottle', description: 'Clean, purified Eva table water, 75cl bottle.', img: placeholder('Eva+Water', 'F4E9DC') },

  // Groceries
  { id: 5, name: 'Indomie Noodles (70g, Chicken)', category: 'groceries', price: 100, unit: '1 pack', description: 'Indomie instant noodles, chicken flavour, 70g sachet. Quick, tasty and a household staple.', img: placeholder('Indomie', 'EFE0BD') },
  { id: 6, name: 'Golden Penny Spaghetti (500g)', category: 'groceries', price: 650, unit: '1 pack', description: 'Golden Penny spaghetti, 500g pack. Cooks evenly for your favourite pasta dishes.', img: placeholder('Spaghetti', 'EFE0BD') },
  { id: 7, name: 'Peak Milk (Tin, 170g)', category: 'groceries', price: 450, unit: '1 tin', description: 'Peak evaporated milk, 170g tin. Rich and creamy for tea, custard or cooking.', img: placeholder('Peak+Milk', 'EFE0BD') },
  { id: 8, name: 'Milo (Tin, 400g)', category: 'groceries', price: 2500, unit: '1 tin', description: 'Milo chocolate malt drink, 400g tin. Energy-giving and loved by the whole family.', img: placeholder('Milo', 'EFE0BD') },
  { id: 9, name: 'St. Louis Sugar (500g)', category: 'groceries', price: 600, unit: '1 pack', description: 'St. Louis refined sugar, 500g pack. Pure white sugar for everyday use.', img: placeholder('Sugar', 'EFE0BD') },
  { id: 10, name: 'Dangote Salt (500g)', category: 'groceries', price: 150, unit: '1 pack', description: 'Dangote iodized table salt, 500g pack. Essential for every kitchen.', img: placeholder('Salt', 'EFE0BD') },
  { id: 11, name: 'Power Oil (1L)', category: 'groceries', price: 1800, unit: '1 bottle', description: 'Power vegetable oil, 1 litre bottle. Pure, cholesterol-free cooking oil.', img: placeholder('Power+Oil', 'EFE0BD') },
  { id: 12, name: 'Titus Sardine (Tin)', category: 'groceries', price: 850, unit: '1 tin', description: 'Titus sardines in oil, single tin. A protein-rich addition to stews, sandwiches and snacks.', img: placeholder('Sardine', 'EFE0BD') },

  // Household
  { id: 13, name: 'Omo Detergent (1kg)', category: 'household', price: 1200, unit: '1 pack', description: 'Omo washing powder, 1kg pack. Tough on stains, gentle on fabric.', img: placeholder('Omo', 'F4E9DC') },
  { id: 14, name: 'Dettol Soap', category: 'household', price: 400, unit: '1 bar', description: 'Dettol antibacterial soap bar. Trusted germ protection for the whole household.', img: placeholder('Dettol', 'F4E9DC') },
  { id: 15, name: 'Hypo Bleach (1L)', category: 'household', price: 700, unit: '1 bottle', description: 'Hypo bleach, 1 litre. For disinfecting and brightening laundry and surfaces.', img: placeholder('Hypo', 'F4E9DC') },
  { id: 16, name: 'Kitchen Towel (Roll)', category: 'household', price: 500, unit: '1 roll', description: 'Soft, absorbent kitchen paper towel roll for everyday cleaning.', img: placeholder('Kitchen+Towel', 'F4E9DC') },

  // Wellbeing
  { id: 17, name: 'Always Sanitary Pads', category: 'wellbeing', price: 650, unit: '1 pack', description: 'Always ultra sanitary pads, standard pack. Reliable, all-day protection.', img: placeholder('Always', 'EFE0BD') },
  { id: 18, name: 'Panadol Extra (Pack)', category: 'wellbeing', price: 350, unit: '1 pack', description: 'Panadol Extra tablets for fast relief from headaches and body pain.', img: placeholder('Panadol', 'EFE0BD') },
  { id: 19, name: 'Hand Sanitizer (60ml)', category: 'wellbeing', price: 500, unit: '1 bottle', description: 'Alcohol-based hand sanitizer, 60ml pocket bottle. Stay protected on the go.', img: placeholder('Sanitizer', 'EFE0BD') },

  // Food Stuffs
  { id: 20, name: 'Garri (1 Paint Bucket)', category: 'foodstuffs', price: 1500, unit: '1 bucket', description: 'Quality white garri, measured in a standard paint bucket. A pantry essential.', img: placeholder('Garri', 'F4E9DC') },
  { id: 21, name: 'Rice (Mama Gold, Derica)', category: 'foodstuffs', price: 1000, unit: '1 derica', description: 'Mama Gold parboiled rice, sold by the derica (cup) measure. Clean and well-sorted.', img: placeholder('Rice', 'F4E9DC') },
  { id: 22, name: 'Beans (Derica)', category: 'foodstuffs', price: 900, unit: '1 derica', description: 'Honey beans, sold by the derica measure. Sweet and soft when cooked.', img: placeholder('Beans', 'F4E9DC') },
];
