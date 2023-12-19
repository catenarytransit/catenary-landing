'use client'
import React from "react";
import {Checkbox} from "@nextui-org/react";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center divide-y divide-solid">
            <section>
                <div className="flex items-center relative pt-32 pb-12 md:pt-40 md:pb-16">
                    <div className="flex gap-4">
                        <Checkbox defaultSelected>Option</Checkbox>
                    </div> 
                </div>
            </section>
        </div>
    )
}