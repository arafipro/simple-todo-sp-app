import { API_URL } from "@/constants/urls";
import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

export default function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  console.log(title, content);
  const createTodo = async ({ title, content }: Todo) => {
    try {
      await fetch(`${API_URL}/api/todos`, {
        method: "POST",
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
    <View className="mb-2 space-y-2">
      <TextInput
        className="p-1 border-2 border-gray-300 rounded-md"
        placeholder="タイトル"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        className="p-1 border-2 border-gray-300 rounded-md"
        placeholder="内容"
        onChangeText={setContent}
        value={content}
      />
      <TouchableHighlight
        onPress={() => {
          if (!title || !content) return;
          createTodo({ title, content });
          setTitle("");
          setContent("");
        }}
        activeOpacity={0.5}
        underlayColor="gray"
        className="bg-black rounded-md"
      >
        <Text className="p-1 text-center text-white font-noto-bold">保存</Text>
      </TouchableHighlight>
    </View>
  );
}
