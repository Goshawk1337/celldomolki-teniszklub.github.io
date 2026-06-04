"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-card py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Tenisz Klub Hírlevél
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Email cím"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-background"
              />
              <Button type="submit" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                FELIRATKOZÁS
              </Button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Naptár
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                GYIK
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Adatvédelem
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Instagram
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Facebook
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                YouTube
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Karrier
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-foreground text-sm">
                Sajtó
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <svg viewBox="0 0 400 120" className="w-full max-w-3xl h-auto text-primary">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-serif text-[30px] md:text-[50px] fill-current italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CELLDÖMÖLK
            </text>
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            2026 MINDEN JOG FENNTARTVA.
          </p>
          <p className="text-muted-foreground text-sm">
            CELLDÖMÖLKI TENISZ KLUB — A TENISZ SZENVEDÉLYÉNEK ÉS A KIVÁLÓSÁGNAK SZENTELVE.
          </p>
        </div>
      </div>
    </footer>
  )
}
