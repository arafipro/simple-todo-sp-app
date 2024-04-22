import { API_URL } from "@/constants/urls";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function TodoItem({ id, title, content }: Todo) {
  const deleteTodo = async (id: number) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View className="flex flex-row items-center my-1">
      <Text className="w-2/6 text-center">{title}</Text>
      <Text className="w-3/6 text-center">{content}</Text>
      <TouchableHighlight
        onPress={() => deleteTodo(id!)}
        activeOpacity={0.5}
        underlayColor="gray"
        className="w-1/6 bg-red-500 rounded-md"
      >
        <Text className="p-1 text-center text-white font-noto-bold">削除</Text>
      </TouchableHighlight>
    </View>
  );
}
