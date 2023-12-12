'use client'

import { useEffect, useState } from 'react'

export default function Page() {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('https://timetable.catenarymaps.org/')
            if (!response.ok) {
                console.log(response)
            }
            const result = await response.json()
            setData(result)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}</div>
}
