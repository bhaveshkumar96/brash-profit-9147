import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Heading } from '@chakra-ui/react'
import { BsJustifyLeft } from 'react-icons/bs'
import styles from '../Styles/Products.module.css'

const SideBar = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const initialState = searchParams.getAll("category")
  const [category, setCategory] = useState(initialState || [])

  const initialOrder = searchParams.get("order")
  const [order, setOrder] = useState(initialOrder || "")
  console.log(order)

  const handleFilter = (e) => {
    const array = [...category]                  //array or newCategory
    if (array.includes(e.target.value)) {        //filter , splice/slice
      array.splice(array.indexOf(e.target.value), 1);
    }
    else {
      array.push(e.target.value)
    }
    setCategory(array)
  }

  const handleSort = (e) => {
    setOrder(e.target.value)
  }
  useEffect(() => {
    const params = {
      category,   //order
    };
    order && (params.order = order)  // to add order in the params
    setSearchparams(params)
  }, [category, order])
  return (
    <div className={styles.sidebar}  >
      <Heading as='h4' size='md' color={"black"} paddingTop='50px' className={styles.filterHeading}>
        Beauty Products
      </Heading>

      <div style={{ fontSize: '15px', color: '#abc72c' }}>
        <Heading as='h5' size='sm' color={"teal"} paddingTop='10px'>-Category</Heading>

        <div >
          <div className={styles.filtertitle}>
            <input type="checkbox" value="hair" onChange={handleFilter}
              checked={category.includes("hair")} />
            <label>Hair</label>
          </div>
          <div className={styles.filtertitle}>
            <input type="checkbox" value="skincare" onChange={handleFilter}
              checked={category.includes("skincare")} />
            <label>Skincare</label>
          </div>
          <div className={styles.filtertitle}>
            <input type="checkbox" value="makeup" onChange={handleFilter}
              checked={category.includes("makeup")} />
            <label>Makeup</label>
          </div>
          <div className={styles.filtertitle}>
            <input type="checkbox" value="fragrance" onChange={handleFilter}
              checked={category.includes("fragrance")} />
            <label>Fragrance</label>
          </div>
        </div>
        <br />
        <br />

        <Heading as='h5' size='sm' color={"teal"}
          className={styles.filterHeading}>-Sort By Price</Heading>
        <div onChange={handleSort} style={{ fontSize: '15px', color: '#abc72c' }}>
          <div className={styles.filtertitle}>
            <input type="radio" name="sort_by" value={"asc"} defaultChecked={order === "asc"} />
            <label>Low To High</label>
          </div>
          <div className={styles.filtertitle} style={{ fontSize: '15px', color: '#abc72c' }}>
            <input type="radio" name="sort_by" value={"desc"} defaultChecked={order === "desc"} />
            <label>High To Low</label>
          </div>
        </div>
        <br /><br />
        <Heading as='h5' size='sm' color={"teal"} className={styles.filterHeading} >-Sort By Title</Heading>
        <div onChange={handleSort} style={{ fontSize: '15px', color: '#abc72c' }}>
          <div className={styles.filtertitle}>
            <input type="radio" name="sort" value={"asc"} defaultChecked={order === "asc"} />
            <label>A to Z</label>
          </div>
          <div className={styles.filtertitle} style={{ fontSize: '15px', color: '#abc72c' }}>
            <input type="radio" name="sort" value={"desc"} defaultChecked={order === "desc"} />
            <label> Z to A</label>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </div>
  )
}

export default SideBar
