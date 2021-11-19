import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url: "https://wallpaperaccess.com/full/1324855.jpg",
    categories: ["Cage", "Bar"],
    price: "$$",
    reviews: 1255,
    rating: 4.5,
  },

  {
    name: "Damas",
    image_url: "https://wallpaperaccess.com/full/1324855.jpg",
    categories: ["Mediterianian", "Bar"],
    price: "$$$$",
    reviews: 5255,
    rating: 4.9,
  },

  {
    name: "Baton Rouge",
    image_url: "https://wallpaperaccess.com/full/1324855.jpg",
    categories: ["Grill", "Bar"],
    price: "$$$",
    reviews: 3255,
    rating: 3.5,
  },
];


export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
    {localRestaurants.map((restaurant, index) =>(
      <View key={index} style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
      </View>
      ))}
    </TouchableOpacity>
  )
}


const RestaurantImage = (props) => (
  <>
  <Image 
    source={{uri: props.image
    }} 
    style={{
      width: '100%', 
      height: 180}}
      />
      <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
      </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={{
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      marginTop: 10
      }}
    >
     <View>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>
          {props.name}
        </Text>
        <Text style={{fontSize: 13, color: "gray"}}>30-45 - min</Text>
      </View>
        <View style={{
          backgroundColor: "#eee", 
          height: 30, width: 30, 
          alignItems: "center", 
          borderRadius: 15, 
          justifyContent: "center"
          }}
          >
          <Text>{props.rating}</Text>
        </View>
     </View>
  
)