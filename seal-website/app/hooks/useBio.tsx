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
  twitter?: string;
  onOpen: (name: string, bio: string[], linkedIn?: string, email?: string, googleScholar?: string, gitHub?: string, twitter?:string) => void;
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
  twitter: undefined,
  onOpen: (name: string, bio: string[], linkedIn?: string, email?: string, googleScholar?: string, gitHub?: string, twitter?: string) => set({
    isOpen: true,
    name: name,
    bio: bio,
    linkedIn: linkedIn,
    email: email,
    googleScholar: googleScholar,
    gitHub: gitHub,
    twitter: twitter
  }),
  onClose: () => set({ isOpen: false })
}));

export default useBio;
