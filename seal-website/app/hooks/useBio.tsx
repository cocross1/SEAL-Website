import { create } from 'zustand';

interface BioModalStore{
    isOpen: boolean;
    name: string;
    bio: string[];
    onOpen: (name: string, bio: string[]) => void;
    onClose: () => void;
}

const useBio = create<BioModalStore>((set) => ({
    isOpen: false,
    name: '',
    bio: [],
    onOpen: ( name: string, bio: string[]) => set({isOpen: true, name: name, bio: bio}),
    onClose: () => {set({ isOpen: false})},
}));

export default useBio;