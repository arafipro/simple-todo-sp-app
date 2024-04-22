import TodoForm from "@/components/TodoForm";
import TodoTable from "@/components/TodoTable";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="mx-2">
      <TodoForm />
      <TodoTable />
    </SafeAreaView>
  );
}
