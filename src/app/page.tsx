import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  // Получаем все товары из файла с данными
  const products = getAllProducts();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Витрина интернет-магазина</h1>
        <p className={styles.subtitle}>Добро пожаловать! Выберите товар</p>
      </header>

      <main className={styles.main}>
        {/* Сетка карточек товаров */}
        <div className={styles.grid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={styles.card}
            >
              {/* Картинка товара */}
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className={styles.productImage}
                />
              </div>

              {/* Название и цена */}
              <div className={styles.cardContent}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.price}>
                  {product.price.toLocaleString("ru-RU")} ₽
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Проект «Витрина» — Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
