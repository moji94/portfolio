import { atomWithStorage } from 'jotai/utils'

export const pageDirStore = atomWithStorage<'rtl' | 'ltr'>('@pageDir', 'rtl')
