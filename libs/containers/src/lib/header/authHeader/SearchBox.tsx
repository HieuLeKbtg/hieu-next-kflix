'use client'

import { HeaderSearch } from '@libs/component'
import { useState } from 'react'

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <HeaderSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    )
}

export default SearchBox
