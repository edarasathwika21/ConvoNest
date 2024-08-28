import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],  // Ensure messages is initialized as an array
    setMessages: (messages) => set({ messages }),
  }));
  
  export default useConversation

