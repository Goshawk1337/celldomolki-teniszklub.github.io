import { Plus } from "lucide-react";
import { Button } from "./ui/button";
const features = [
    {
        title: "Személyre szabott edzés",
    },
    {
        title: "Modern létesítmények",
    },
    {
        title: "Közösségi események",
    },
    {
        title: "Versenyek és Tornák"
    }
];

export default function About() {
    return (
        <section id="about" className="py-24  bg-background">
            <div className="container mx-auto px-6 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col  gap-12">
                        <div className="max-w-2xl">
                            <h2 className="pb-12 font-serif text-4xl md:text-3xl xl:text-5xl text-foreground leading-tight">A szenvedélynek  és a <br /> Kiválóságnak szentelve.</h2>
                            <p className="text-muted-foreground leading-relaxed">A Celldömölki Tenisz Klub egy olyan hely, ahol a márkák és az emberek eljönnek, hogy élesítsék képességeiket, fejlesszék technikájukat és kiépítsék a jövőjüket. Segítünk a teniszezőknek megtalálni a hangjukat a pályán és azon kívül is. </p>
                            <p className="pt-12 text-muted-foreground leading-relaxed">Ezért hoztuk létre az Ace Programot™ – egy új módszert a pihenésre, az újratöltődésre és a gondolkodás ösztönzésére, amely nem csak karriereket, hanem teljes életutakat támogat.</p>
                        </div>
                    </div>
                    <div className="flex flex-col  ">
                        <div className="flex flex-col gap-5">
                            {features.map((features) => (
                                <div key={features.title} className="  flex flex-row items-center px-6 gap-10 bg-muted/50 border border-border/50  h-20 hover:border-border cursor-pointer hover:bg-muted transition-colors duration-300 rounded-lg">
                                    <Plus className="h-6 w-6" />
                                    <p className="text-muted-foreground">{features.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-border pt-16 mt-20">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Kapcsolat</p>
                                <h2 className="font-serif text-3xl md:text-4xl text-foreground">Kérdezz Bármit.</h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-muted-foreground">Ha bármilyen kérdése van, ne habozzon kapcsolatba lépni velünk!</p>
                            <Button variant="outline">Kapcsolatfelvétel</Button>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}