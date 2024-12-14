import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
  return (
    <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full rounded-md" variant="outline">
                <Send className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </section>
  )
}

export default ContactForm