'use client'

import { useState } from 'react'

import { HeaderSearch } from '@/components/header'

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <HeaderSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    )
}

export default SearchBox
