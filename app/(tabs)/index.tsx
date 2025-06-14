import { images } from "@/constants/images";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
function MenuItem({ title, rightText }) {
  return (
    <TouchableOpacity className="flex-row justify-between py-4 border-b border-gray-800">
      <Text className="text-white text-base">{title}</Text>
      {rightText && (
        <Text className="text-gray-400 text-base">{rightText}</Text>
      )}
    </TouchableOpacity>
  );
}
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-black px-4">
      <View className="flex-row items-center mt-16 mb-6">
        <Image source={images.avatar} className="w-12 h-12 rounded-full mr-4" />
        <View>
          <Text className="text-white font-semibold text-lg">androneane</Text>
          <TouchableOpacity>
            <Text className="text-gray-400 text-sm">Pokaż mój profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-indigo-900 p-4 rounded-xl mb-6">
        <Text className="text-white font-semibold text-base">
          Sprzedaj przedmiot
        </Text>
        <Text className="text-gray-300 text-sm mt-1 mb-3">
          Zarób na tym, czego już nie potrzebujesz
        </Text>
        <TouchableOpacity className="bg-teal-600 px-4 py-2 rounded-md w-fit">
          <Text className="text-white font-bold text-sm">Dodaj teraz</Text>
        </TouchableOpacity>
      </View>

      <MenuItem title="Ulubione rzeczy" />
      <MenuItem title="Portfel" rightText="198,71 zł" />
      <MenuItem title="Moje zamówienia" />
      <MenuItem title="Personalizacja" />
      <MenuItem title="Zniżki na zestawy" rightText="do 20%" />
      <MenuItem title="Tryb wakacyjny" />
      <MenuItem title="Wpłaty na cel" rightText="Wyłączone" />
    </ScrollView>
  );
}
