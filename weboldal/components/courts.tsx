"use client"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Check, X } from "lucide-react"
const courts = [
    {
        id: 1,
        name: "Center Court",
        type: "Salak pálya",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
        price: "8.000 Ft/óra",
        available: true,
    },
    {
        id: 2,
        name: "Court 2",
        type: "Kemény pálya",
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80",
        price: "6.500 Ft/óra",
        available: true,
    },
    {
        id: 3,
        name: "Court 3",
        type: "Fedett pálya",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
        price: "10.000 Ft/óra",
        available: false,
    },
    {
        id: 4,
        name: "Court 4",
        type: "Padel pálya",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
        price: "7.000 Ft/óra",
        available: true,
    },
]

export default function Courts() {
    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-primary uppercase tracking-wide">PÁLYÁINK</p>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">Világszínvonalú <br /> létesítmények</h1>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courts.map((court) => (
                        <div className="flex flex-col gap-4 bg-background px-2 py-2 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <img src={court.image} alt="" className="rounded-lg h-80 object-cover" />
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-2xl  text-foreground  leading-tight tracking-tighter">{court.name}</h2>
                                    <Badge variant={!court.available ? "destructive" : "default"} className="w-24 h-6"> {court.available ? "Elérhető" : "Foglalt"}</Badge>


                                </div>
                                <p className="text-sm text-muted-foreground font-semibold">{court.type}</p>
                                <p className="text-sm text-muted-foreground">{court.price}</p>
                            </div>
                            <Button disabled={!court.available}>Foglalás</Button>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

