import React, { useState } from "react";
import styles from "./FruitCard.module.css";
import Link from "next/link";
import axios from "axios";
export interface Fruit {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}
type Props = {
  fruit: Fruit;
};
const FruitCard = (props: Props) => {
  const [products,setProduc]
  const onDelete = async() => {
    const answer = confirm(" are you shure")
    if(answer) {
      await axios.delete(`http://10.10.50.59:3000/products/${props.fruit.id}`)
      axios.get("http://10.10.50.59:3000/products")
    }
  }
  return (
    <div className={styles.fruitCard}>
      <div className={styles.imageWrapper}>
        <img src={props.fruit.image} />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper} onClick={onDelete}>
            <img src={"/images/trash.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.fruitDescription}>
        <div className={styles.fruitName}>
          <span className={styles.fruitname}>{props.fruit.name}</span>
          <span className={styles.fruitColor}>{props.fruit.category} </span>
        </div>
        <div>
          <span className={styles.fruitPrice}>{props.fruit.price} </span>
        </div>
      </div>
      <Link
        href={`/Product?id=${props.fruit.id}`}
        className={styles.fruitBuyNow}
      >
        <span className={styles.buyNowText}>Buy Now</span>
      </Link>
    </div>
  );
};
export default FruitCard;
