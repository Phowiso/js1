// Файл с данными о товарах
// Многомерная структура: массив объектов товаров

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники Sony WH-1000XM5",
    price: 29990,
    image: "https://picsum.photos/id/1/400/300",
    description: "Премиальные беспроводные наушники с активным шумоподавлением. Время работы до 30 часов. Отличное качество звука и комфорт при длительном использовании. Поддержка Bluetooth 5.2, быстрая зарядка."
  },
  {
    id: 2,
    name: "Смартфон Samsung Galaxy S24",
    price: 74990,
    image: "https://picsum.photos/id/2/400/300",
    description: "Флагманский смартфон с экраном 6.2 дюйма Dynamic AMOLED 2X. Процессор Snapdragon 8 Gen 3, 8 ГБ ОЗУ, 256 ГБ памяти. Камера 50 МП + 12 МП + 10 МП. Поддержка 5G и беспроводной зарядки."
  },
  {
    id: 3,
    name: "Ноутбук ASUS VivoBook 15",
    price: 54990,
    image: "https://picsum.photos/id/3/400/300",
    description: "Лёгкий и производительный ноутбук для учёбы и работы. Экран 15.6 дюйма Full HD, процессор Intel Core i5 12-го поколения, 16 ГБ ОЗУ, SSD 512 ГБ. Отличный выбор для студентов."
  },
  {
    id: 4,
    name: "Умные часы Apple Watch Series 9",
    price: 39990,
    image: "https://picsum.photos/id/4/400/300",
    description: "Смарт-часы с всегда включённым дисплеем Always-On Retina. Мониторинг здоровья: ЭКГ, пульс, уровень кислорода в крови. Водонепроницаемость до 50 метров. Совместимость с iPhone."
  },
  {
    id: 5,
    name: "Игровая консоль PlayStation 5",
    price: 54990,
    image: "https://picsum.photos/id/5/400/300",
    description: "Новейшая игровая консоль от Sony. Мощный процессор AMD Zen 2, графика RDNA 2. Поддержка 4K и ray tracing. SSD 825 ГБ. В комплекте геймпад DualSense с тактильной отдачей."
  },
  {
    id: 6,
    name: "Электронная книга Amazon Kindle Paperwhite",
    price: 14990,
    image: "https://picsum.photos/id/6/400/300",
    description: "Электронная книга с экраном 6.8 дюйма E Ink Carta 1200. Подсветка регулируемая, водозащита IPX8. Память 16 ГБ — хватит на тысячи книг. Автономность до 10 недель."
  },
  {
    id: 7,
    name: "Кофемашина DeLonghi Magnifica S",
    price: 42990,
    image: "https://picsum.photos/id/7/400/300",
    description: "Автоматическая кофемашина для дома. Готовит эспрессо, капучино, латте. Встроенная кофемолка, регулировка крепости. Простой интерфейс и лёгкий уход."
  },
  {
    id: 8,
    name: "Робот-пылесос Xiaomi Robot Vacuum S10",
    price: 18990,
    image: "https://picsum.photos/id/8/400/300",
    description: "Умный робот-пылесос с лазерной навигацией LDS. Мощность всасывания 4000 Па. Управление через приложение Mi Home. Влажная уборка, картография помещения."
  }
];

// Функция для получения товара по id
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

// Функция для получения всех товаров
export function getAllProducts(): Product[] {
  return products;
}
