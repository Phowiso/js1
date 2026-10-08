import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/data/products";
import styles from "./page.module.css";

// Генерируем статические параметры для всех товаров (SSG)
export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Типы для params в Next.js 15+
type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  // В Next.js 15 params - это Promise
  const { id } = await params;
  const productId = parseInt(id, 10);

  // Ищем товар по id
  const product = getProductById(productId);

  // Если товар не найден — 404
  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Назад к витрине
        </Link>
        <h1 className={styles.logo}>Витрина</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.productCard}>
          {/* Картинка */}
          <div className={styles.imageSection}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className={styles.productImage}
              priority
            />
          </div>

          {/* Информация о товаре */}
          <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.price}>
              {product.price.toLocaleString("ru-RU")} ₽
            </p>

            <div className={styles.descriptionBlock}>
              <h2 className={styles.descTitle}>Описание товара</h2>
              <p className={styles.description}>{product.description}</p>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>Артикул: {product.id}</span>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Проект «Витрина» — Next.js | Студенческая работа</p>
      </footer>
    </div>
  );
}
