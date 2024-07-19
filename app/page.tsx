"use client";
import Header from "./components/Header/Header";
import Select from "./components/Select/Select";
import FruitCard, { Fruit } from "./components/FruitCard/FruitCard";
import { fruits } from "@/public/CONSTS/Fruit";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import DiscountCard from "./components/DiscountCard/DiscountCard";
import Filters from "./components/Filters/Filters";
import { Value } from "sass";
import axios from "axios";
import { useRecoilState } from "recoil";
import { categoryState } from "./states";

export default function App() {
  const [category, setCategory] = useRecoilState(categoryState)
  const [products,setProduct] = useState([])

  useEffect (() => {
    axios.get(`http://localhost:3000/products${category ? '/category/' + category: []}`)
    .then(result => {
      setProduct(result.data)
    })
  },[category])


  return (
    <div>
      <div className={styles.bodyWrapper}>
        <Select />
        <div className={styles.wrapper}>
          <div>
            <Filters />
          </div>
          <div className={styles.section}>
            <DiscountCard productName="Gori's Apple" />
            <div className={styles.fruitWrapper}>
              {products.map((fruit: Fruit, idx) => (
                <FruitCard fruit={fruit} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
