'use client'

import React, { useEffect, useState } from 'react'

const DropdownSearch = ({ options }: { options: string[] }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [isOpen, setIsOpen] = useState(false)

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value
        setSearchTerm(newSearchTerm)

        const newFilteredOptions = options.filter((option) =>
            option.toLowerCase().includes(newSearchTerm.toLowerCase())
        )
        setFilteredOptions(newFilteredOptions)
    }

    const handleSelect = (selectedOption: string) => {
        setSearchTerm(selectedOption)
        setIsOpen(false)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                onClick={toggleDropdown}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '5px',
                    paddingRight: '25px', // Adjust as needed
                    width: '100%', // Make input full-width
                    //borderBottom: '1px solid white', // Add border under input
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%', // Make dropdown full-width
                    display: isOpen ? 'block' : 'none',
                    backgroundColor: 'black',
                    color: 'white',
                    zIndex: 1,
                }}
            >
                {filteredOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(option)}
                        style={{
                            cursor: 'pointer',
                            padding: '8px 10px', // Adjust padding
                            // Remove borderBottom to eliminate the line under each option
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '5px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                }}
                onClick={toggleDropdown}
            >
                &#9662; {/* Unicode down arrow character */}
            </div>
        </div>
    )
}

interface DataItem {
    time: string
}

export default function Page() {
    const [data, setData] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon']

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return (
        <div>
            <main>
                <section>
                    <div className="flex items-center relative pt-32 pb-12 md:pt-40 md:pb-16">
                        <div className="container mx-auto px-4">
                            <h1>Dropdown with Search</h1>
                            <DropdownSearch options={options} />
                            <h1>Data from localhost:8080</h1>
                            {loading ? <p>Loading...</p> : <div>{data}</div>}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
