// import { create } from 'zustand';

// interface BioModalStore{
//     isOpen: boolean;
//     name: string;
//     bio: string[];
//     onOpen: (name: string, bio: string[]) => void;
//     onClose: () => void;
// }

// const useBio = create<BioModalStore>((set) => ({
//     isOpen: false,
//     name: '',
//     bio: [],
//     onOpen: ( name: string, bio: string[]) => set({isOpen: true, name: name, bio: bio}),
//     onClose: () => {set({ isOpen: false})},
// }));

// export default useBio;

import { create } from 'zustand';

interface BioModalStore {
  isOpen: boolean;
  name: string;
  bio: string[];
  linkedIn?: string;
  email?: string;
  googleScholar?: string;
  gitHub?: string;
  onOpen: (name: string, bio: string[], linkedIn?: string, email?: string, googleScholar?: string, gitHub?: string) => void;
  onClose: () => void;
}

const useBio = create<BioModalStore>((set) => ({
  isOpen: false,
  name: '',
  bio: [],
  linkedIn: undefined,
  email: undefined,
  googleScholar: undefined,
  gitHub: undefined,
  onOpen: (name: string, bio: string[], linkedIn?: string, email?: string, googleScholar?: string, gitHub?: string) => set({
    isOpen: true,
    name: name,
    bio: bio,
    linkedIn: linkedIn,
    email: email,
    googleScholar: googleScholar,
    gitHub: gitHub
  }),
  onClose: () => set({ isOpen: false })
}));

export default useBio;
