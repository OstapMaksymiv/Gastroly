import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { images } from "@/constants/images";

const Search = () => {
  const filters = ["Produkty mięsne", "Usługi sprzątania i podłączania"];
  return (
    <View className="relative">
      <TouchableOpacity className="absolute bottom-44 right-6 bg-black px-6 py-3 rounded-full z-50">
        <Text className="text-white text-sm">📍 Mapa</Text>
      </TouchableOpacity>
      <LinearGradient
        colors={["#4B3F72", "#417B5A"]}
        style={{ paddingTop: 50, paddingHorizontal: 15 }}
      >
        <View className="flex-row gap-2 items-center mb-4">
          <View className="flex-1 bg-white px-4 py-2 rounded-xl border border-gray-300 flex-row items-center">
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              placeholder="Szukaj usług lub biznesów"
              placeholderTextColor="#999"
              className="ml-2 text-black flex-1"
            />
          </View>
        </View>
        <View className="flex-row justify-between mb-4">
          <TouchableOpacity className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex-1 mr-2">
            <Text className="text-black">Rzeszów, 35-120</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex-1 ml-2">
            <Text className="text-black">Kiedy?</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between mb-4">
          {["Wszystkie", "Dobra", "Usługi", "Narzędzia"].map((tab, index) => (
            <TouchableOpacity key={index}>
              <Text className="text-white font-medium">{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
        }}
        className="bg-white "
      >
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity className="flex-row items-center px-3 py-1 bg-gray-100 rounded-xl">
            <Feather name="filter" size={16} />
            <Text className="ml-2">Filtry</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center px-3 py-1 bg-gray-100 rounded-xl">
            <Text>Sortuj według: Polecane</Text>
            <Feather name="chevron-down" size={16} />
          </TouchableOpacity>
        </View>
        <Text className="text-xl font-bold text-black mb-2">Promocje</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {[1, 2].map((_, index) => (
            <View
              key={index}
              className="w-64 mr-4 rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                source={images.post}
                style={{ width: "100%", height: 140 }}
                resizeMode="cover"
              />
              <TouchableOpacity className="absolute bottom-1/2 right-2  bg-purple-500 px-4 py-1 rounded-full">
                <Text className="text-white text-sm font-medium">
                  Zobacz usługi
                </Text>
              </TouchableOpacity>
              <View className="px-3 py-2">
                <Text className="text-black text-base font-semibold">
                  Dailyfruits
                </Text>
                <Text className="text-gray-600 text-sm">
                  ul.Jarzego Plesniarowicza 17 / 150 Warszawa
                </Text>
                <View className="flex-row flex-wrap gap-2 mt-2 items-center">
                  <View className="bg-cyan-100 px-3 py-1 rounded-full">
                    <Text className="text-cyan-800 text-xs font-medium">
                      ZAOSZCZĘDŹ DO 15%
                    </Text>
                  </View>
                  <Text className="text-gray-500 text-xs">Promowany</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <Text className="text-xl font-bold text-black mb-2">Wyniki (607)</Text>
        <Text className="text-gray-500 mb-4">
          Co ma wpływ na wyniki wyszukiwania
        </Text>
        <View className="flex-row flex-wrap gap-2 mb-6">
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full"
            >
              <Text className="text-black text-sm">{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {[1, 2].map((_, index) => (
            <View
              key={index}
              className="w-64 mr-4 rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                source={images.post}
                style={{ width: "100%", height: 140 }}
                resizeMode="cover"
              />
              <TouchableOpacity className="absolute bottom-1/2 right-2  bg-purple-500 px-4 py-1 rounded-full">
                <Text className="text-white text-sm font-medium">
                  Zobacz usługi
                </Text>
              </TouchableOpacity>
              <View className="px-3 py-2">
                <Text className="text-black text-base font-semibold">
                  Dailyfruits
                </Text>
                <Text className="text-gray-600 text-sm">
                  ul.Jarzego Plesniarowicza 17 / 150 Warszawa
                </Text>
                <View className="flex-row flex-wrap gap-2 mt-2 items-center">
                  <View className="bg-cyan-100 px-3 py-1 rounded-full">
                    <Text className="text-cyan-800 text-xs font-medium">
                      ZAOSZCZĘDŹ DO 15%
                    </Text>
                  </View>
                  <Text className="text-gray-500 text-xs">Promowany</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Search;
