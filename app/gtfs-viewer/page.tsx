'use client'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export default function Page() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className="flex flex-col items-center justify-center divide-y divide-solid">
            <section>
                <div className="flex items-center relative pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="container mx-auto px-4">
                        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                        <Listbox.Options>
                            {people.map((person) => (
                            <Listbox.Option
                                key={person.id}
                                value={person}
                                disabled={person.unavailable}
                            >
                                {person.name}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Listbox>
                    </div>
                </div>
            </section>
        </div>
  )
}
