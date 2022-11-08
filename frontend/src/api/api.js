import axios from 'axios';
import { LogDebug, LogLog } from '../constants/constant_vals';
const myAxios=axios.create({
    baseURL:"http://localhost:8080"
})

export const getCart=(userId)=>{
    myAxios.get("/cart").then((res)=>{
        return res.data;
    })
}

export const getUserById=(userId)=>{
    myAxios.get("/user").then((res)=>{
        return res.data;
    })
}

export const getAllUsers=()=>{
    myAxios.get("/allUsers").then((res)=>{
        return res.data;
    })
}

export const signUp=async(data)=>{
    const response=await myAxios.post("/user/signUp",data).then((res)=>{
        if(LogLog){
            console.log(res)
        }
        return res;
    }).catch((error)=>{
        if(LogDebug){
            console.log(error)
        }
    })
    if(LogLog){
        console.log(response.data)
    }
    return response.data
}

export const deleteUserById=(userId)=>{
    myAxios.delete("/user/delete").then((res)=>{
        return res.data;
    })
}

export const getLogin=async(data)=>{
    console.log("aa to gaya")
    const response=await myAxios.post("/user/login",data).then((res)=>{
        console.log(res)
        // console.log(res.data)
        // console.log(res.data.type)
        return res;
    }).catch((error)=>{
        console.log(error)
    })
    console.log(response.data)
    return response.data
}

export const getProductById=(productId)=>{
    myAxios.get("/products/").then((res)=>{
        return res.data;
    })
}

export const getAllProduct=()=>{
    myAxios.get("/allProducts/").then((res)=>{
        return res.data;
    })
}

export const registerProduct=async(data)=>{
    const response=await myAxios.post("/seller/addProduct",data).then((res)=>{
        if(LogLog){
            console.log(res)
        }
        return res;
    }).catch((error)=>{
        if(LogDebug){
            console.log(error)
        }
    })
    if(LogLog){
        console.log(response.data)
    }
    return response.data
}

export const deleteProductById=(productId)=>{
    myAxios.delete("/seller/deleteProduct").then((res)=>{
        return res.data;
    })
}

export const getSellingProducts=(userId)=>{
    myAxios.get("/seller/products/").then((res)=>{
        return res.data;
    })
}

export const addToCart=async(data)=>{
    const response=await myAxios.post("/cart",data).then((res)=>{
        if(LogLog){
            console.log(res)
        }
        return res;
    }).catch((error)=>{
        if(LogDebug){
            console.log(error)
        }
    })
    if(LogLog){
        console.log(response.data)
    }
    return response.data
}

export const deleteProductFromCart=async(data)=>{
    const response=await myAxios.post("/cart/deleteProduct",data).then((res)=>{
        if(LogLog){
            console.log(res)
        }
        return res;
    }).catch((error)=>{
        if(LogDebug){
            console.log(error)
        }
    })
    if(LogLog){
        console.log(response.data)
    }
    return response.data
}

export const getOrdersById=(userId)=>{
    myAxios.get("/orders").then((res)=>{
        return res.data;
    })
}

export const postOrder=async(data)=>{
    const response=await myAxios.post("/order",data).then((res)=>{
        if(LogLog){
            console.log(res)
        }
        return res;
    }).catch((error)=>{
        if(LogDebug){
            console.log(error)
        }
    })
    if(LogLog){
        console.log(response.data)
    }
    return response.data
}



const {
    REACT_APP_HOME_PAGE_URL,
    REACT_APP_ADD_TO_CART_URL,


    REACT_APP_ADD_TO_CART_PORT,
    REACT_APP_HOME_PAGE_PORT
} = process.env

export const gethomeData = axios.create({
    baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
})
export const addToCartApi = axios.create({
    baseURL: REACT_APP_ADD_TO_CART_URL || `http://localhost:${REACT_APP_ADD_TO_CART_PORT}`
})
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
