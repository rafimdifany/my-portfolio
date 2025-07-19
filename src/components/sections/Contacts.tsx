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
            className="h-screen snap-start flex items-center justify-center text-foreground"
        >
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Let&#39;s work together</h3>
                            <p className="text-muted-foreground mb-8">
                                I&#39;m always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-4">
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
                                    <div className="grid grid-cols-2 gap-4">
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