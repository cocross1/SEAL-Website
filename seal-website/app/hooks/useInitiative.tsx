import { create } from 'zustand';

interface InitiativeModalStore{
    isOpen: boolean;
    title: string;
    body: string[];
    proj2:string;
    onOpen: (title: string, body: string[]) => void;
    onClose: () => void;
}

const useInitiative = create<InitiativeModalStore>((set) => ({
    isOpen: false,
    title: '',
    body: [],
    proj2:'',
    onOpen: (title: string, body: string[]) => set({isOpen: true, title: title, body: body}),
    onClose: () => {set({ isOpen: false})},
}));

export default useInitiative;