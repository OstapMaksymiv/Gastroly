import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { LinearGradient } from "expo-linear-gradient";
const categories = [
  { label: "Owoce", image: images.ryna },
  { label: "Zielen", image: images.warzywa },
  { label: "Ryba", image: images.owoce },
  { label: "Mieso", image: images.zielen },
  { label: "Zielen", image: images.warzywa },
];

const services = [
  {
    name: "Dailyfruits",
    address: "ul.Jarzego Plesniarowicza 17 / 150 Warszawa",
    image: images.post,
    rating: 5.0,
    reviews: 2100,
  },
  {
    name: "Dailyfruits",
    address: "ul.Jarzego Plesniarowicza 17 / 150 Warszawa",
    image: images.post,
    rating: 5.0,
    reviews: 2100,
  },
  {
    name: "Dailyfruits",
    address: "ul.Jarzego Plesniarowicza 17 / 150 Warszawa",
    image: images.post,
    rating: 5.0,
    reviews: 2100,
  },
];
const recommended = [
  {
    name: "Dailyfruits",
    address: "ul.Jarzego Plesniarowicza 17 / 150 Warszawa",
    image: images.post,
    rating: 5.0,
    reviews: 2100,
  },
];
const promotions = [
  {
    name: "Dailyfruits",
    address: "ul.Jarzego Plesniarowicza 17 / 150 Warszawa",
    image: images.post,
    rating: 5.0,
    reviews: 2100,
    discount: "ZAOSZCZĘDŹ DO 15%",
    promoted: true,
  },
];
const Liked = () => {
  return (
    <LinearGradient
      colors={["#4B3F72", "#417B5A"]}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 16, marginTop: 30 }}>
        <Text className="text-white text-2xl font-semibold mb-4">Gastroly</Text>
        <View className="bg-white rounded-xl flex-row items-center px-4 py-2 mb-4 ">
          <TextInput
            placeholder="Szukaj usług lub biznesów"
            placeholderTextColor="#999"
            className="flex-1 text-base text-black"
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => (
            <View key={index} className="items-center mr-4">
              <Image source={cat.image} style={styles.categoryImage} />
              <Text className="text-white mt-2">{cat.label}</Text>
            </View>
          ))}
        </ScrollView>
        <Text className="text-white text-lg font-semibold mt-5 mb-3">
          Odwiedzane i Ulubione
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {services.map((service, index) => (
            <View
              key={index}
              className="w-64 mr-4 rounded-xl overflow-hidden bg-[#1e1e1e]"
            >
              <View style={styles.cardImageContainer}>
                <Image source={service.image} style={styles.cardImage} />
                <View className="absolute top-2 right-2 bg-black/70 px-4 py-2 rounded-md">
                  <Text className="text-white text-xs">
                    {service.rating.toFixed(1)} ⭐
                  </Text>
                  <Text className="text-white text-[10px] text-right">
                    {service.reviews} opinii
                  </Text>
                </View>
                <TouchableOpacity className="absolute bottom-2 right-3  bg-purple-400 px-4 py-1 rounded-full">
                  <Text className="text-white text-sm font-medium">
                    Zobacz usługi
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="px-3 py-2">
                <Text className="text-white text-base font-semibold">
                  {service.name}
                </Text>
                <Text className="text-white text-sm opacity-60">
                  {service.address}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <Text className="text-white text-lg font-semibold mt-5 mb-3">
          Promocje
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {promotions.map((item, index) => (
            <View
              key={index}
              className="w-64 mr-4 rounded-xl overflow-hidden bg-[#1e1e1e]"
            >
              <View style={styles.cardImageContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <View className="absolute top-2 right-2 bg-black/70 px-4 py-2 rounded-md">
                  <Text className="text-white text-xs">
                    {item.rating.toFixed(1)} ⭐
                  </Text>
                  <Text className="text-white text-[10px] text-right">
                    {item.reviews} opinii
                  </Text>
                </View>
                <TouchableOpacity className="absolute bottom-2 right-3 bg-purple-400 px-4 py-1 rounded-full">
                  <Text className="text-white text-sm font-medium">
                    Zobacz usługi
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="px-3 py-2 gap-1">
                <Text className="text-white text-base font-semibold">
                  {item.name}
                </Text>
                <Text className="text-white text-sm opacity-60">
                  {item.address}
                </Text>
                {item.discount && (
                  <View className="bg-cyan-700 rounded-full px-3 py-1 mt-1 w-fit">
                    <Text className="text-white text-xs">{item.discount}</Text>
                  </View>
                )}
                {item.promoted && (
                  <Text className="text-white text-xs opacity-50 mt-1">
                    Promowany 🔖
                  </Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "cover",
  },
  cardImageContainer: {
    height: 140,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Liked;
