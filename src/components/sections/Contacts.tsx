"use client";

import {Mail, MapPin, Phone} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";
import {Input} from "@/components/ui/Input";
import {Textarea} from "@/components/ui/Textarea";
import {Button} from "@/components/ui/Button";
import {useToast} from "@/hooks/use-toast";
import React from "react";

export default function Contacts() {

    const {toast} = useToast();

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });
    };

    return(
        <section
            id="contacts"
            className="min-h-screen snap-start flex items-center justify-center text-foreground py-16 md:py-0"
        >
            <div className="container mx-auto px-4 sm:px-6 pt-16 md:pt-0">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Get In Touch</h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Let&#39;s work together</h3>
                            <p className="text-muted-foreground mb-6 md:mb-8">
                                I&#39;m always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-4 mb-6 md:mb-0">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-primary"/>
                                    <span>rafimdifany@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-primary"/>
                                    <span>+62 812 6111 9417</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-5 h-5 text-primary"/>
                                    <span>Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleContactSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Input placeholder="First Name" required/>
                                        <Input placeholder="Last Name" required/>
                                    </div>
                                    <Input type="email" placeholder="Email" required/>
                                    <Input placeholder="Subject" required/>
                                    <Textarea placeholder="Message" rows={4} required/>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}